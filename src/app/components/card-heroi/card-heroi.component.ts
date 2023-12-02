import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroi } from 'src/app/core/types/heroi';

@Component({
  selector: 'app-card-heroi',
  templateUrl: './card-heroi.component.html',
  styleUrls: ['./card-heroi.component.scss']
})
export class CardHeroiComponent {
  @Input()
  public heroi!: Heroi;
  @Output()
  public excluir = new EventEmitter();
  @Output()
  public editar = new EventEmitter();

  excluirHeroi() {
    return this.excluir.emit(this.heroi);
  }

  editarHeroi() {
    return this.editar.emit(this.heroi);
  }
}
