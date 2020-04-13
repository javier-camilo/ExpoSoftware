import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Asignatura} from '../comite/asignatura/models/asignatura';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  baseUrl: string;

  constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleHttpErrorService)
      {
      this.baseUrl = baseUrl;
      }

      post(asignatura:Asignatura ): Observable<Asignatura> {
        return this.http.post<Asignatura>(this.baseUrl + 'api/Asignatura', asignatura)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Asignatura>('Registrar Asignatura', null))
            );
    }


    get(): Observable<Asignatura[]> {
      return this.http.get<Asignatura[]>(this.baseUrl + 'api/Asignatura')
          .pipe(
              tap(_ => this.handleErrorService.log('Datos Recibidos')),
              catchError(this.handleErrorService.handleError<Asignatura[]>('Consulta Asignatura', null))
          );
    }


    searchHeroes(term: string): Observable<Asignatura> {

      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of(null);
      }
      return this.http.get<Asignatura>(this.baseUrl + 'api/Asignatura/'+term).pipe(
        tap(
          _ => this.handleErrorService.log('Datos Recibidos')
        ),
        catchError(this.handleErrorService.handleError<Asignatura>('searchHeroes', null))
      );
    }
  
}
