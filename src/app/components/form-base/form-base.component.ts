import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { SuperPoderesService } from 'src/app/core/services/super-poderes.service';
import { SuperPoder } from 'src/app/core/types/super-poder';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  @Input()
  ehTelaDeCadastro: boolean = true
  @Input()
  title: string = 'Novo Herói'
  @Input()
  textButton: string = 'Cadastrar'
  @Output()
  emitirEvento = new EventEmitter()
  formBase: FormGroup
  poderesSelecionados: number[] = []
  superPoderes: SuperPoder[] = []
  
  constructor(
    private readonly superPoderService : SuperPoderesService,
    private readonly formularioService: FormularioService,
    private readonly router: Router
  ) {
    this.formBase = formularioService.formBase
  }

  ngOnInit(): void {
    this.superPoderService.listar().subscribe({
      next: res => this.superPoderes = res
    })

    if (this.ehTelaDeCadastro) {
      this.formBase.get('superPoderes')?.setValidators([Validators.required])
    } else {
      this.formBase.get('superPoderes')?.setValidators(null)
    }

    this.formBase.get('superPoderes')?.updateValueAndValidity()
  }

  enviarFormulario(): void {
    this.emitirEvento.emit()
  }

  cancelar(): void {
    this.router.navigate(['/'])
  }
}
