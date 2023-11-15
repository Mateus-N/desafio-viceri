import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { HeroisService } from 'src/app/core/services/herois.service';
import { MensagemService } from 'src/app/core/services/mensagem.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  constructor(
    private readonly formularioService: FormularioService,
    private readonly mensagemService: MensagemService,
    private readonly heroisService : HeroisService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.formularioService.limparFormulario()
  }

  cadastrarHeroi(): void {
    const novoHeroi = this.formularioService.getValues()
    this.heroisService.criar(novoHeroi).subscribe({
      next: () => {
        this.mensagemService.openSnackBar('Herói cadastrado com sucesso')
        this.router.navigate(['/'])
      }
    })
  }
}
