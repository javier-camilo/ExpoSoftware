import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-consulta-solicitudes',
  templateUrl: './consulta-solicitudes.component.html',
  styleUrls: ['./consulta-solicitudes.component.css']
})
export class ConsultaSolicitudesComponent implements OnInit {

  proyectos:Proyecto[]=[];
  FiltroDocente:string;

  constructor(private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.FiltroDocente="";
  }

  getProyectos(){

    this.proyectoService.TraerProyectos(this.FiltroDocente).subscribe(result=>this.proyectos=result);

  }

  dataSource = this.proyectos;
  displayedColumns: string[] = ['Referencia', 'Titulo', 'Resumen', 'Estado', 'Pendon'];


  comprobar(comprobar:string):boolean{
    if(comprobar==="Aprobado"){
      return true;
    }else{
      return false;
    }

  }


}
