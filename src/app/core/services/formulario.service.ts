import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateHeroi } from '../types/create-heroi';
import { Heroi } from '../types/heroi';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  formBase: FormGroup

  constructor() {
    this.formBase = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.maxLength(120)]),
      nomeHeroi: new FormControl(null, [Validators.required, Validators.maxLength(120)]),
      superPoderes: new FormControl([], [Validators.required]),
      dataNascimento: new FormControl(null, [Validators.required]),
      altura: new FormControl(null, [Validators.required]),
      peso: new FormControl(null, [Validators.required]),
    })
  }
  
  public getValues(): CreateHeroi {
    const dataNascimento = new Date(this.formBase?.get('dataNascimento')?.value)
    const formValues = this.formBase?.getRawValue() as CreateHeroi
    formValues.dataNascimento = dataNascimento
    return formValues
  }
  
  public updateValues(heroi: Heroi) {
    this.limparFormulario()
    this.formBase?.patchValue({
      nome: heroi.nome,
      nomeHeroi: heroi.nomeHeroi,
      dataNascimento: heroi.dataNascimento,
      peso: heroi.peso,
      altura: heroi.altura,
      superPoderes: null
    })
  }

  public limparFormulario(): void {
    this.formBase.reset()
  }
}
