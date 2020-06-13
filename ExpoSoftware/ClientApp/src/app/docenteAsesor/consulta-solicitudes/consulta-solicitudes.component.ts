import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-consulta-solicitudes',
  templateUrl: './consulta-solicitudes.component.html',
  styleUrls: ['./consulta-solicitudes.component.css']
})
export class ConsultaSolicitudesComponent implements OnInit {

  docente:string;
  proyectos:Proyecto[];
  FiltroDocente:string;

  constructor(private proyectoService:ProyectoService) { }

  ngOnInit(): void {

  }

}
