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
import {EstudianteConsultaComponent} from './comite/estudiante/estudiante-consulta/estudiante-consulta.component';
import {EstudianteRegistroComponent} from './comite/estudiante/estudiante-registro/estudiante-registro.component';
import {EstudianteEdicionComponent} from './comite/estudiante/estudiante-edicion/estudiante-edicion/estudiante-edicion.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';

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
      
      path:"estudianteConsulta",
      component: EstudianteConsultaComponent
    },
    {
      
      path:"estudianteRegistro",
      component: EstudianteRegistroComponent
    },
    {
      
      path:"estudianteEdicion",
      component: EstudianteEdicionComponent
    },
    {
      
      path:"login",
      component: UserLoginComponent
    },
    {
      
      path:"userRegister",
      component: UserRegisterComponent  
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
