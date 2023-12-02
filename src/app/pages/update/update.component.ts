import { HeroisService } from 'src/app/core/services/herois.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { Component } from '@angular/core';
import { MensagemService } from 'src/app/core/services/mensagem.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(
    private readonly formularioService: FormularioService,
    private readonly mensagemService: MensagemService,
    private readonly heroisService: HeroisService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  editar(): void {
    const heroiEditado = this.formularioService.getValues();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const heroiId = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.heroisService.editar(heroiId, heroiEditado).subscribe({
      next: () => {
        this.mensagemService.openSnackBar('Herói atualizado com sucesso');
        this.router.navigate(['/']);
      }
    });
  }
}
