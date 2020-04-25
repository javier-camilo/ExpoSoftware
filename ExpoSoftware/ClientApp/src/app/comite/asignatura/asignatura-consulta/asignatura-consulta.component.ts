import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from '../models/asignatura';

@Component({
  selector: 'app-asignatura-consulta',
  templateUrl: './asignatura-consulta.component.html',
  styleUrls: ['./asignatura-consulta.component.css']
})
export class AsignaturaConsultaComponent implements OnInit {

  searchText:string;
  asignaturas:Asignatura[];
  asignatura:Asignatura;

  constructor(private asignaturaService:AsignaturaService) { }


  ngOnInit() {

    this.searchText="";
    this.asignaturaService.get().subscribe(result => {
      this.asignaturas = result;
    });

  }



}
