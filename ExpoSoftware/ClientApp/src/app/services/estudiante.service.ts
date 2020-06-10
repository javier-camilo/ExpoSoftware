
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Estudiante } from '../docenteAsesor/proyecto/models/estudiante';


const httpOptionsPut = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class EstudianteService {

  baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) { 

      this.baseUrl = baseUrl;

    }

    post(estudiante: Estudiante): Observable<Estudiante> {
      return this.http.post<Estudiante>(this.baseUrl + 'api/Estudiante', estudiante)
        .pipe(
          tap(_ => this.handleErrorService.log('Guardado con exito')),
          catchError(this.handleErrorService.handleError<Estudiante>('Registrar Docente', null))
        );
    }

    get(mostrar?:string): Observable<Estudiante[]> {
      return this.http.get<Estudiante[]>(this.baseUrl + 'api/Estudiante')
        .pipe(
          tap(_ => 

                {

                  if (mostrar==null) {
                      this.handleErrorService.log('Datos de estudiantes recibidos')
                  }
                }

            ),

          catchError(this.handleErrorService.handleError<Estudiante[]>('Consulta Asignatura', null))

        );
    }



    getId(id: string, llamadoOperacion?:string): Observable<Estudiante> {
      const url = `${this.baseUrl + 'api/Estudiante'}/${id}`;
      return this.http.get<Estudiante>(url, httpOptions)
        .pipe(
          tap(_ => 
  
            {
  
              if(llamadoOperacion==null){
                
                this.handleErrorService.log('se consulto el estuidante con identificacion = ' + id)
  
              }
  
            }

            ),

          catchError(this.handleErrorService.handleError<Estudiante>('Buscar docente', null))
        );
    }


    delete(estudiante: Estudiante | string): Observable<string> {
      const id = typeof estudiante === 'string' ? estudiante : estudiante.idEstudiante;
      return this.http.delete(this.baseUrl + 'api/Estudiante/' + id, { responseType: 'text' })
        .pipe(
          tap(_ => this.handleErrorService.log(_)),
          catchError(this.handleErrorService.handleError<string>('Elimiar Estudiante', null))
        );
    }
  
  
    put(estudiante: Estudiante): Observable<any> {
      const url = `${this.baseUrl}api/Estudiante/${estudiante.idEstudiante}`;
      return this.http.put(url, estudiante, { responseType: 'text' })
        .pipe(
          tap(_ => this.handleErrorService.log(_)),
          catchError(this.handleErrorService.handleError<any>('Editar Estudiante'))
        );
    }
  






}
