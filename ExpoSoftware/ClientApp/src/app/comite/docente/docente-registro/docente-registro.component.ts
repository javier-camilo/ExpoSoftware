import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../../asignatura/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-docente-registro',
  templateUrl: './docente-registro.component.html',
  styleUrls: ['./docente-registro.component.css']
})
export class DocenteRegistroComponent implements OnInit {

  
  asignaturas:Asignatura[];

  constructor(private asignaturaService:AsignaturaService) { }

  ngOnInit(): void {
    this.comprobar();
  }

  mensaje():void{

  }

  comprobar(){
    this.asignaturaService.get().subscribe(result => {
      this.asignaturas = result;
    });
  }

}
