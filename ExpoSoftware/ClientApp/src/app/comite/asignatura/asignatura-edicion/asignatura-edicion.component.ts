import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from '../models/asignatura';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';
import { CuadroDialogoComponent } from 'src/app/cuadro-dialogo/cuadro-dialogo.component';


let options: NgbModalOptions = {
  size: 'xl'
};

@Component({
  selector: 'app-asignatura-edicion',
  templateUrl: './asignatura-edicion.component.html',
  styleUrls: ['./asignatura-edicion.component.css']
})

export class AsignaturaEdicionComponent implements OnInit {

  formGroup:FormGroup;
  asignatura:Asignatura;
  respuesta:string;

  constructor(private asignaturaService: AsignaturaService,private dialog:MatDialog,
    private formBuilder: FormBuilder,private modalService: NgbModal, private rutaActiva: ActivatedRoute ) { }


  ngOnInit() {

    this.asignatura=new Asignatura();
    

    const id = this.rutaActiva.snapshot.params.identificacion;
    this.asignaturaService.getId(id).subscribe(p => {
      this.asignatura = p;
      this.asignatura != null ? alert('Se Consulto la persona ') : alert('Error al Consultar');
    });


  }


  buscar(){
    const modalRef = this.modalService.open(ModalComponent,options);
    modalRef.componentInstance.name="consultaAsignaturas";
    
    modalRef.result.then((result)=>
      this.ngOnInit()
      );

  }

  confirmar(operacion:string){

    let dialogo= this.dialog.open(CuadroDialogoComponent, {data:{name:"Alerta", descripcion:"esta seguro de realizar esta accion?"} } );

    dialogo.afterClosed().subscribe(result => {
      

        if (operacion=="1") {
          this.update(result);
        } else if(operacion=="2"){
          this.delete(result);
        }


      }

    );

    
  }

  delete(confirmacion:string){
    
    if(confirmacion=="true")this.asignaturaService.delete(this.asignatura.codigoAsignatura).subscribe(p=> {
      alert(p);
    });

  }


  update(confirmacion:string){

    if(confirmacion=="true")this.asignaturaService.put(this.asignatura).subscribe(p => {
      alert(p);
    });
    

  }

}
