import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DocenteService } from 'src/app/services/docente.service';
import { Docente } from 'src/app/comite/docente/models/docente';
import { Estudiante } from '../models/estudiante';

@Component({
  selector: 'app-proyecto-registro',
  templateUrl: './proyecto-registro.component.html',
  styleUrls: ['./proyecto-registro.component.css']
})
export class ProyectoRegistroComponent implements OnInit {

  isLinear = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  busquedaDocente:string;

  estudiante:Estudiante;

  docente:Docente;

  constructor(private _formBuilder: FormBuilder, private docenteService:DocenteService) {}

  ngOnInit() {
    
    this.docente=new Docente();
    this.estudiante=new Estudiante();

    this.iniciarDocente();

    this.buildForm();
    this.buildFromDos();
  }


  iniciarDocente(){
       
    this.docente.identificacion=" ";
    
    this.docente.nombre="oye oye ";

    this.docente.asignaturas="";

    this.docente.descripcion="";

  }

  buscarDocente(){


    this.docenteService.getId(this.busquedaDocente).subscribe(result  => { this.docente=result; this.buildForm(); });
   
  
  }


  private buildForm(){


    this.firstFormGroup= this._formBuilder.group({


          identificacion: [this.docente.identificacion, [Validators.required, Validators.maxLength(2)]],
          nombre: [this.docente.nombre, Validators.required],
          asignaturas: [this.docente.asignaturas,Validators.required],
          especialidad: [this.docente.descripcion,Validators.required]

          });


    }

    get control(){
      return this.firstFormGroup.controls;
    }

    private buildFromDos(){

      this.estudiante.idEstudiante="";
      this.estudiante.nombreCompleto="";
      this.estudiante.correo="";
      this.estudiante.celular="";
      this.estudiante.codigoAsignatura="";

      this.secondFormGroup = this._formBuilder.group({


        idEstudiante: [this.estudiante.idEstudiante, [Validators.required, Validators.maxLength(2)]],
        nombreCompleto: [this.estudiante.nombreCompleto, Validators.required],
        correo: [this.estudiante.correo,Validators.required],
        celular: [this.estudiante.celular,Validators.required],
        codigoAsignatura:[this.estudiante.codigoAsignatura,Validators.required]

        });


    }


}
