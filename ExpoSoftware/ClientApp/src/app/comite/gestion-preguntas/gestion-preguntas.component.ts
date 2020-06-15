import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AspectoEvaluar } from './models/aspecto-evaluar';
import { ApestoEvaluarService } from 'src/app/services/apesto-evaluar.service';

@Component({
  selector: 'app-gestion-preguntas',
  templateUrl: './gestion-preguntas.component.html',
  styleUrls: ['./gestion-preguntas.component.css']
})
export class GestionPreguntasComponent implements OnInit {

  preguntas:AspectoEvaluar[]=[];
  
  constructor(private rutaActiva: ActivatedRoute,private aspectoEvaluarService:ApestoEvaluarService) { }

  ngOnInit(): void {

    const id = this.rutaActiva.snapshot.params.codigoRubrica;
    this.inicar(id);

  }

  inicar(filtroPreguntas:string){

    this.aspectoEvaluarService.TraerPreguntas(filtroPreguntas).subscribe(result=>this.preguntas=result);

  }



}
