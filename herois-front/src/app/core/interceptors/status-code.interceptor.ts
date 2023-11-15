import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MensagemService } from '../services/mensagem.service';

@Injectable()
export class StatusCodeInterceptor implements HttpInterceptor {

  constructor(
    private readonly mensagemService: MensagemService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((erro: HttpErrorResponse) => {
        this.mensagemService.openSnackBar(`${erro.error.message}`);
        return throwError(() => new Error('Ocorreu um erro'));
      })
    );
  }
}
