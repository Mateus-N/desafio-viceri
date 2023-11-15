import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { HeroisService } from 'src/app/core/services/herois.service';
import { MensagemService } from 'src/app/core/services/mensagem.service';
import { Heroi } from 'src/app/core/types/heroi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public herois: Heroi[] = []

  constructor(
    private readonly heroisService: HeroisService,
    private readonly formularioService: FormularioService,
    private readonly mensagemService: MensagemService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.heroisService.listar().subscribe({
      next: res => this.herois = res
    })
  }

  excluirHeroi(ev: Heroi) {
    this.heroisService.apagar(ev.id).subscribe({
      next: () => {
        this.mensagemService.openSnackBar(`${ev.nomeHeroi} foi excluido dos registros`)
        this.heroisService.listar().subscribe({
          next: res => this.herois = res
        })
      }
    })
  }

  editarHeroi(ev: Heroi) {
    this.formularioService.updateValues(ev)
    this.router.navigate([`/update/${ev.id}`])
  }
}
