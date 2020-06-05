import { Component, OnInit } from '@angular/core';
import { Docente } from '../../docente/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { AreaService } from 'src/app/services/area.service';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Area } from '../../area/model/area';
import { Asignatura } from '../../asignatura/models/asignatura';

@Component({
  selector: 'app-docente-consulta',
  templateUrl: './docente-consulta.component.html',
  styleUrls: ['./docente-consulta.component.css']
})
export class DocenteConsultaComponent implements OnInit {

searchText: string;
docentes : Docente[];
asignatura:Asignatura[];

  constructor(private docenteService : DocenteService, private asignaturaservice:AsignaturaService) { }

  ngOnInit() {

    this.searchText="";

    this.docenteService.get().subscribe(result => {
      this.docentes = result;
    });


    this.asignaturaservice.get("").subscribe(result=>{this.asignatura=result});


  }


}
