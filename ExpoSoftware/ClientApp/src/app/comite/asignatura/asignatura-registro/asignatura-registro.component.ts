import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from '../models/asignatura';

@Component({
  selector: 'app-asignatura-registro',
  templateUrl: './asignatura-registro.component.html',
  styleUrls: ['./asignatura-registro.component.css']
})
export class AsignaturaRegistroComponent implements OnInit {

  asignatura:Asignatura;

  constructor(private asignaturaService: AsignaturaService ) { }

  ngOnInit() {
    this.asignatura=new Asignatura();
  }

  add(){
    alert(this.asignatura.codigoAsignatura);
    
    alert(this.asignatura.nombreAsignatura);
    
    alert(this.asignatura.descripcionAsignatura);
    
    alert(this.asignatura.areaAsignatura);
  
    this.asignaturaService.post(this.asignatura).subscribe(p => {
      if (p != null) {
        alert('Asignatura registrada');
      }
    });

  }

}
