import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Area } from '../comite/area/model/area';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  
  baseUrl: string;

  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) { 
      
      this.baseUrl = baseUrl;
      
    }


    post(area:Area): Observable<Area> {
      return this.http.post<Area>(this.baseUrl + 'api/Area', area)
          .pipe(
              tap(_ => this.handleErrorService.log('Guardado con exito')),
              catchError(this.handleErrorService.handleError<Area>('Registrar area', null))
          );
        
    }


    
    get(operacion:string): Observable<Area[]> {
      return this.http.get<Area[]>(this.baseUrl + 'api/Area')
          .pipe(
              tap(_ => 
               

                {

                if(operacion==="areaComponent")
                this.handleErrorService.log('Datos de la areas recibido');

                }
               
            ),
              catchError(this.handleErrorService.handleError<Area[]>('Consulta area', null))
          );
    }


    
  
}
