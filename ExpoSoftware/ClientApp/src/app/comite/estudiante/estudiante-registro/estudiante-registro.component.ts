import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from '../../asignatura/models/asignatura';
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogoComponent } from 'src/app/cuadro-dialogo/cuadro-dialogo.component';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';

import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from '../models/estudiante';
import { DocenteService } from 'src/app/services/docente.service';
import { AreaService } from 'src/app/services/area.service';

let options: NgbModalOptions = {
  size: 'xl'
};

@Component({
  selector: 'app-estudiante-registro',
  templateUrl: './estudiante-registro.component.html',
  styleUrls: ['./estudiante-registro.component.css']
})
export class EstudianteRegistroComponent implements OnInit {

  asignaturas:Asignatura[];
  formGroup : FormGroup;
  estudiante : Estudiante;
  respuesta : string;

  constructor(private docenteService: DocenteService, private dialog : MatDialog,
    private formBuilder : FormBuilder, private modalService : NgbModal, private asignaturaService : AsignaturaService) { }

  ngOnInit(): void {
    this.estudiante = new Estudiante();
    

  }

  iniciarAsignaturas(){
    this.asignaturaService.get("").subscribe(result => {this.asignaturas=result;
    if(this.asignaturas.length===0){
      this.dialog.open(CuadroDialogoComponent, {data: {name:"Señor usuario", "debe digilenciar las areas habilitadas para poder digilenciar el formulario", EsMensaje: "true"}});
    }

    });
  }

  private buildForm(){

    this.estudiante.identificacion="";
    this.estudiante.nombre="";
    this.estudiante.semestre=3;
    this.estudiante.asignaturas="seleccionar";
    this.estudiante.correo="";

  }



  }

}
