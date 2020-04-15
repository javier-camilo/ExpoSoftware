import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  noticias:any[]=[
    {
      name:"Docentes habilitados",
      img:"../../assets/universidad.JPG",
      desc:"Docentes habilitados para la feria"
    },
    
    {
      name:"los mejores",
      img:"../../assets/primer_puesto.JPG",
      desc:"ver el listado de los ganadores de la feria exposoftware"

    },

    {
      name:"los mejores",
      img:"../../assets/Captura.JPG",
      desc:"avances y aportaciones de la feria"

    }
  ];

  constructor(){

  }

  openDialog(): void {

  }

  ngOnInit() {
    
  }
}
