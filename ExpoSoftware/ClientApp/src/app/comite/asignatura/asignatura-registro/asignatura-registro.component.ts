import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from '../models/asignatura';
import { MatDialog } from '@angular/material/dialog';
import { AsignaturaConsultaComponent } from '../asignatura-consulta/asignatura-consulta.component';
import { CuadroDialogoComponent } from 'src/app/cuadro-dialogo/cuadro-dialogo.component';

@Component({
  selector: 'app-asignatura-registro',
  templateUrl: './asignatura-registro.component.html',
  styleUrls: ['./asignatura-registro.component.css']
})
export class AsignaturaRegistroComponent implements OnInit {

  asignatura:Asignatura;
  respuesta:string;

  constructor(private asignaturaService: AsignaturaService,private dialog:MatDialog) { }

  ngOnInit() {
    this.asignatura=new Asignatura();
  }

  add(resultado:string){

    if (resultado=="true") {
      this.asignaturaService.post(this.asignatura).subscribe(p => {
        if (p != null) {
          alert('Asignatura registrada');
        }
      });
    } 

  }

  confirmarGuardado(){
    
    let ref = this.dialog.open(CuadroDialogoComponent, {data: {name:"Guardar", descripcion:"¿Desea Guardar?"}});

    ref.afterClosed().subscribe(result => {
      this.respuesta=result;
      this.add(this.respuesta);
    })


  }

  consulta(){
    
  }
  

}
