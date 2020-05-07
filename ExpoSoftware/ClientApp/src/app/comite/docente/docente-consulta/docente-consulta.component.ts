import { Component, OnInit } from '@angular/core';
import { Docente } from '../../docente/models/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docente-consulta',
  templateUrl: './docente-consulta.component.html',
  styleUrls: ['./docente-consulta.component.css']
})
export class DocenteConsultaComponent implements OnInit {

searchText: string;
docentes : Docente[];
docente : Docente;

  constructor(private docenteService : DocenteService) { }

  ngOnInit() {
    this.searchText="";
    this.docenteService.get().subscribe(result => {
      this.docentes = result;
    });
  }
  

}
