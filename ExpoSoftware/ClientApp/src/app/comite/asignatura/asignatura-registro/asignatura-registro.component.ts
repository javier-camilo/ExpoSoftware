import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from '../models/asignatura';
import { MatDialog } from '@angular/material/dialog';
import { AsignaturaConsultaComponent } from '../asignatura-consulta/asignatura-consulta.component';
import { CuadroDialogoComponent } from 'src/app/cuadro-dialogo/cuadro-dialogo.component';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-asignatura-registro',
  templateUrl: './asignatura-registro.component.html',
  styleUrls: ['./asignatura-registro.component.css']
})
export class AsignaturaRegistroComponent implements OnInit {

  formGroup: FormGroup;
  asignatura:Asignatura;
  respuesta:string;

  constructor(private asignaturaService: AsignaturaService,private dialog:MatDialog,
    private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.asignatura=new Asignatura();
    this.buildForm();
  }


  private buildForm(){
    
    this.asignatura.codigoAsignatura="";
    this.asignatura.nombreAsignatura="";
    this.asignatura.areaAsignatura="Selecionar...";
    this.asignatura.descripcionAsignatura="";

    
  this.formGroup = this.formBuilder.group({
        codigoAsignatura: [this.asignatura.codigoAsignatura, [Validators.required, Validators.maxLength(10)]],
        nombreAsignatura: [this.asignatura.nombreAsignatura, Validators.required],
        areaAsignatura: [this.asignatura.areaAsignatura, this.ValidaArea],
        descripcionAsignatura: [this.asignatura.descripcionAsignatura,Validators.required]

        });

  }

  private ValidaArea(control: AbstractControl){

      const area=control.value;

      if(area==="Selecionar..."){
        return{validArea: true, message:"debe seleccionar un valor en el combo"}
      }

      return null;

  }


  get control() { 
    return this.formGroup.controls;
  }
    

  onSubmit() {
      if (this.formGroup.invalid) {
          return;
         }
      this.confirmarGuardado();
   }

    
  confirmarGuardado(){
    
    let ref = this.dialog.open(CuadroDialogoComponent, {data: {name:"Guardar", descripcion:"¿Desea Guardar?"}});

    ref.afterClosed().subscribe(result => {
      this.respuesta=result;
      this.add(this.respuesta);
    })


  }

  add(resultado:string){

    this.asignatura= this.formGroup.value;

    if (resultado=="true") {
      this.asignaturaService.post(this.asignatura).subscribe(p => {
        if (p != null) {
          this.dialog.open(CuadroDialogoComponent, {data: {name:"Guardar", descripcion:"se guardo con exito"}});
        }
      });
    } 

  }



}
