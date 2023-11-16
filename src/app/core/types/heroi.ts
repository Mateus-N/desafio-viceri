import { SuperPoder } from "./super-poder"

export interface Heroi {
  id: number,
  nome: string,
  nomeHeroi: string,
  dataNascimento: Date,
  altura: number,
  peso: number,
  heroiSuperPoderes: [
    {
      superPoderes: SuperPoder
    }
  ]
}