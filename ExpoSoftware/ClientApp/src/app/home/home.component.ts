import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  noticias:any[]=[
    {
      name:"Docentes habilitados",
      img:"../../assets/universidad.JPG",
      desc:"Docentes habilitados para la feria",
      route:"/docenteConsulta"
    },
    
    {
      name:"los mejores",
      img:"../../assets/primer_puesto.JPG",
      desc:"ver el listado de los ganadores de la feria exposoftware",
      route:""
    },

    {
      name:"los mejores",
      img:"../../assets/Captura.JPG",
      desc:"avances y aportaciones de la feria",
      route:""
    }
  ];

  constructor(){

  }


  ngOnInit() {
    
  }
  
}
