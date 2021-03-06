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
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { EstudianteConsultaComponent } from './comite/estudiante/estudiante-consulta/estudiante-consulta.component';
import { EstudianteRegistroComponent } from './comite/estudiante/estudiante-registro/estudiante-registro.component';
import { EstudianteEdicionComponent } from './comite/estudiante/estudiante-edicion/estudiante-edicion/estudiante-edicion.component';
import { ComiteGuard } from './guards/comite.guard';
import { AsesorGuard } from './guards/asesor.guard';
import { EvaluadorGuard } from './guards/evaluador.guard';

const routes: Routes = [

    {
    path: 'asignaturaConsulta',
    component:AsignaturaConsultaComponent,
    canActivate: [ComiteGuard]
    },
    {
      path: 'asignaturaRegistro',
      component: AsignaturaRegistroComponent,
       canActivate: [ComiteGuard]
    },
    {
      path: 'asignaturaEdicion/:identificacion',
      component: AsignaturaEdicionComponent,
      canActivate: [ComiteGuard]
    },
   
    {
        path: 'docenteRegistro',
        component: DocenteRegistroComponent,
        canActivate: [ComiteGuard]

    },
    {
          path: 'docenteConsulta',
          component: DocenteConsultaComponent,
          canActivate: [ComiteGuard]
    },
    {
          path: 'areaRegistro',
          component: AreaRegistroComponent,
          canActivate: [ComiteGuard]
    },
    {
          path: 'areaConsulta',
          component: AreaConsultaComponent,
          canActivate: [ComiteGuard]
    },
    {
      path:"areaEdicion/:codigoArea",
      component:AreaEdicionComponent,
      canActivate: [ComiteGuard]
    },
    {
      
      path:"proyectoRegistro",
      component:ProyectoRegistroComponent,
      canActivate: [AsesorGuard]
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
      component: EstudianteRegistroComponent,
      canActivate : [AsesorGuard]
    },
    {
      
      path:"estudianteEdicion",
      component: EstudianteEdicionComponent,
      canActivate : [AsesorGuard]

    },
    {
      
      path:"login",
      component: UserLoginComponent
    },
    {
      
      path:"userRegister",
      component: UserRegisterComponent,
      canActivate : [ComiteGuard]
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
