import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rubrica } from '../models/rubrica';

@Component({
  selector: 'app-rubrica-registro',
  templateUrl: './rubrica-registro.component.html',
  styleUrls: ['./rubrica-registro.component.css']
})
export class RubricaRegistroComponent implements OnInit {

  rubricaForm: FormGroup;
  rubrica:Rubrica;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.rubrica=new Rubrica();
    this.buildForm();


  }

  inicializar(){
    this.rubrica.idRubrica=" ";
    this.rubrica.titulo=" ";
    this.rubrica.codigoArea=" ";

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

}
