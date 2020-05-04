import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {
  
  constructor(private dialog:MatDialog) { }
  
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
  public log(message: string) {
    this.dialog.open(CuadroDialogoComponent, {data: {name:"Señor Usuario", descripcion: message, EsMensaje: "true"}});
  }
  

}
