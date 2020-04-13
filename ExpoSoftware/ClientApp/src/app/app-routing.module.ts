import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturaRegistroComponent } from './comite/asignatura/asignatura-registro/asignatura-registro.component';
import { AsignaturaConsultaComponent } from './comite/asignatura/asignatura-consulta/asignatura-consulta.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
    path: 'asignaturaConsulta',
    component:AsignaturaConsultaComponent
    },
    {
      path: 'asignaturaRegistro',
      component: AsignaturaRegistroComponent
    }
];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
