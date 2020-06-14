import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rubrica } from '../models/rubrica';
import { Area } from '../../area/model/area';
import { AreaService } from 'src/app/services/area.service';
import { CuadroDialogoComponent } from 'src/app/cuadro-dialogo/cuadro-dialogo.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-rubrica-registro',
  templateUrl: './rubrica-registro.component.html',
  styleUrls: ['./rubrica-registro.component.css']
})
export class RubricaRegistroComponent implements OnInit {

  rubricaForm: FormGroup;
  rubrica:Rubrica;
  areas:Area[];

  constructor(private formBuilder: FormBuilder,private areaService:AreaService,private dialog:MatDialog) { }

  ngOnInit(): void {

    this.rubrica=new Rubrica();
    this.inicializar();
    this.cargarAreas();
    this.buildForm();


  }

  inicializar(){
    this.rubrica.idRubrica="";
    this.rubrica.titulo="";
    this.rubrica.codigoArea="";

  }

  cargarAreas(){

    this.areaService.get("").subscribe(result=>{

      this.areas=result;

      if(this.areas==null){

      }

    });

  }

  private buildForm(){

    this.rubricaForm = this.formBuilder.group({
      idRubrica: [this.rubrica.idRubrica, [Validators.required, Validators.maxLength(4)]],
      titulo : [this.rubrica.titulo, Validators.required],
      codigoArea : [this.rubrica.codigoArea, Validators.required]
    });

  }


  submit() {
    if (!this.rubricaForm.valid) {
      return;
    }
    console.log(this.rubricaForm.value);
  }

  
  confirmar(operacion:string){

    let dialogo= this.dialog.open(CuadroDialogoComponent, {data:{name:"Advertencia", descripcion:"¿esta seguro de realizar esta accion?"} } );

    dialogo.afterClosed().subscribe(result => {
      

        if (operacion=="true") {

          this.submit();

        }

      }

    );

  }


}
