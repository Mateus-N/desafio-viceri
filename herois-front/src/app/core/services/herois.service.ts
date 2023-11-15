import { CreateHeroi } from './../types/create-heroi';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroi } from '../types/heroi';

@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  private readonly apiUrl: string = environment.apiUrl

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public listar(): Observable<Heroi[]> {
    return this.httpClient.get<Heroi[]>(`${this.apiUrl}/herois`)
  }

  public criar(heroi: CreateHeroi): Observable<Heroi> {
    console.log(heroi)
    return this.httpClient.post<Heroi>(`${this.apiUrl}/herois`, heroi)
  }

  public apagar(id: number): Observable<Heroi> {
    return this.httpClient.delete<Heroi>(`${this.apiUrl}/herois/${id}`);
  }

  public editar(id: number, heroi: CreateHeroi): Observable<Heroi> {
    return this.httpClient.put<Heroi>(`${this.apiUrl}/herois/${id}`, heroi)
  }
}
