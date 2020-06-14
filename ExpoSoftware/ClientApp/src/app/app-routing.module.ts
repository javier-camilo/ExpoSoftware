import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturaRegistroComponent } from './comite/asignatura/asignatura-registro/asignatura-registro.component';
import { AsignaturaConsultaComponent } from './comite/asignatura/asignatura-consulta/asignatura-consulta.component';

import { Routes, RouterModule } from '@angular/router';
import { DocenteRegistroComponent } from './comite/docente/docente-registro/docente-registro.component';
import { DocenteConsultaComponent } from './comite/docente/docente-consulta/docente-consulta.component';
import { AsignaturaEdicionComponent } from './comite/asignatura/asignatura-edicion/asignatura-edicion.component';
import { AreaRegistroComponent } from './comite/area/area-registro/area-registro.component';
import { AreaConsultaComponent } from './comite/area/area-consulta/area-consulta.component';
import { AreaEdicionComponent } from './comite/area/area-edicion/area-edicion.component';
import { ProyectoRegistroComponent } from './docenteAsesor/proyecto/proyecto-registro/proyecto-registro.component';
import { ProyectoConsultaComponent } from './docenteAsesor/proyecto/proyecto-consulta/proyecto-consulta.component';
import { ConsultaSolicitudesComponent } from './docenteAsesor/consulta-solicitudes/consulta-solicitudes.component';
import { RubricaRegistroComponent } from './comite/rubrica/rubrica-registro/rubrica-registro.component';
import { RubricaConsultaComponent } from './comite/rubrica/rubrica-consulta/rubrica-consulta.component';


const routes: Routes = [

    {
    path: 'asignaturaConsulta',
    component:AsignaturaConsultaComponent
    },
    {
      path: 'asignaturaRegistro',
      component: AsignaturaRegistroComponent
    },
    {
      path: 'asignaturaEdicion/:identificacion',
      component: AsignaturaEdicionComponent
    },
   
    {
        path: 'docenteRegistro',
        component: DocenteRegistroComponent
    },
    {
          path: 'docenteConsulta',
          component: DocenteConsultaComponent
    },
    {
          path: 'areaRegistro',
          component: AreaRegistroComponent
    },
    {
          path: 'areaConsulta',
          component: AreaConsultaComponent
    },
    {
      path:"areaEdicion/:codigoArea",
      component:AreaEdicionComponent
    },
    {
      
      path:"proyectoRegistro",
      component:ProyectoRegistroComponent
    },
    {
      
      path:"proyectoConsulta",
      component: ProyectoConsultaComponent
    },
    {
      path:"proyectoSolicitudes",
      component: ConsultaSolicitudesComponent
    },
    {
      path:"rubricaRegistro",
      component: RubricaRegistroComponent
    },
    {
      path:"rubricaConsulta",
      component: RubricaConsultaComponent
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
