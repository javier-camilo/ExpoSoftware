import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../../asignatura/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { CuadroDialogoComponent } from 'src/app/cuadro-dialogo/cuadro-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-docente-registro',
  templateUrl: './docente-registro.component.html',
  styleUrls: ['./docente-registro.component.css']
})
export class DocenteRegistroComponent implements OnInit {

  
  asignaturas:Asignatura[];

  constructor(private asignaturaService:AsignaturaService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.comprobar();
  }

  mensaje():void{

  }

  comprobar(){

    this.asignaturaService.get("").subscribe(result => {
      this.asignaturas = result;
      if(this.asignaturas.length===0){
        
        this.dialog.open(CuadroDialogoComponent, {data: {name:"Señor Usuario", descripcion: "debe digilenciarlas asignatruas habilitadas para poder registrar los docentes", EsMensaje: "true"}});
        
      }
    });

  }

}
