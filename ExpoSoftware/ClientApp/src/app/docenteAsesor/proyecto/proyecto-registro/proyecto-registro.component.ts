import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DocenteService } from 'src/app/services/docente.service';
import { Docente } from 'src/app/comite/docente/models/docente';
import { Estudiante } from '../models/estudiante';
import { CuadroDialogoComponent } from 'src/app/cuadro-dialogo/cuadro-dialogo.component';
import { MatDialog } from '@angular/material';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from 'src/app/comite/asignatura/models/asignatura';

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
  asignaturas:Asignatura[];

  constructor(private _formBuilder: FormBuilder, private docenteService:DocenteService,private dialog:MatDialog,
    private asignaturaSerice:AsignaturaService) {}

  ngOnInit() {
    
    this.docente=new Docente();
    this.estudiante=new Estudiante();

    this.iniciarDocente();
    this.iniciarAAsignatura();

    this.buildForm();
    this.buildFromDos();

  }


  iniciarDocente(){
       
    this.docente.identificacion="";
    
    this.docente.nombre="";

    this.docente.asignaturas="";

    this.docente.descripcion="";

  }


  iniciarAAsignatura(){

    this.asignaturaSerice.get("").subscribe(result=>this.asignaturas=result);

  }

  buscarDocente(){


    this.docenteService.getId(this.busquedaDocente).subscribe(result  => { this.docente=result; 

      if(this.docente==null){
        
         this.resultado("Consultar","No se encuentra registrado el docente");

      }

      this.buildForm(); 
    
    
    });
  
  }


  private buildForm(){


    this.firstFormGroup= this._formBuilder.group({


          identificacion: [this.docente.identificacion, Validators.required],
          nombre: [this.docente.nombre, Validators.required],
          asignaturas: [this.docente.asignaturas,Validators.required],
          descripcion: [this.docente.descripcion,Validators.required]

          });


    }

   

    private buildFromDos(){

      this.estudiante.identificacion="";
      this.estudiante.nombre="";
      this.estudiante.correo="";
      this.estudiante.celular="";
      this.estudiante.asignatura="";
      this.estudiante.semestre=0;


      this.secondFormGroup = this._formBuilder.group({


        idEstudiante: [this.estudiante.identificacion, [Validators.required, Validators.maxLength(2)]],
        nombreCompleto: [this.estudiante.nombre, Validators.required],
        correo: [this.estudiante.correo,Validators.required],
        celular: [this.estudiante.celular,Validators.required],
        codigoAsignatura:[this.estudiante.asignatura,Validators.required],
        semestre:[this.estudiante.semestre,Validators.required]


        });


    }

    get control(){
      return this.firstFormGroup.controls;
    }

    onSubmit() {
        if (this.firstFormGroup.invalid && this.docente==null) {
            return;
           }
        this.add();
     }

    add(){

      this.docente=this.firstFormGroup.value;
      this.docente.tipo="asesor";
      this.docenteService.post(this.docente,"si").subscribe(result=>this.docente=result);

    }

    resultado(operacion:string, mensaje:string){

      this.dialog.open(CuadroDialogoComponent, {data: {name:operacion, descripcion: mensaje, EsMensaje: "true"}});
      
    }


}
