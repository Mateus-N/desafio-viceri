import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperPoder } from '../types/super-poder';

@Injectable({
  providedIn: 'root'
})
export class SuperPoderesService {
  
  private readonly apiUrl: string = environment.apiUrl

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public listar(): Observable<SuperPoder[]> {
    return this.httpClient.get<SuperPoder[]>(`${this.apiUrl}/superpoderes`)
  }
}
