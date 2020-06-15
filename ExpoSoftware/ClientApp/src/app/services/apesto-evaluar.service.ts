import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { AspectoEvaluar } from '../comite/gestion-preguntas/models/aspecto-evaluar';
import { tap, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ApestoEvaluarService {

  baseUrl: string;

  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) { 
      
      this.baseUrl = baseUrl;
      
    }


        
    get(operacion:string): Observable<AspectoEvaluar[]> {
      return this.http.get<AspectoEvaluar[]>(this.baseUrl + 'api/AspectoEvaluar')
          .pipe(
              tap(_ => 
               

                {

                if(operacion==="AspectoEvaluar")
                this.handleErrorService.log('Datos de la preguntas recibido');

                }
               
            ),
              catchError(this.handleErrorService.handleError<AspectoEvaluar[]>('Consulta Preguntas', null))
          );
    }


    public TraerPreguntas(filtroString:string):Observable<AspectoEvaluar[]>{

      const url = `${this.baseUrl + 'api/AspectoEvaluar/getPreguntas'}/${filtroString}`;
      return this.http.get<AspectoEvaluar[]>(url,httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('Datos de las Preguntas recibidas')),
        catchError(this.handleErrorService.handleError<AspectoEvaluar[]>('Consulta Preguntas', null))
      );
  
    }


  


}
