import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AsignaturaRegistroComponent } from './comite/asignatura/asignatura-registro/asignatura-registro.component';
import { AsignaturaConsultaComponent } from './comite/asignatura/asignatura-consulta/asignatura-consulta.component';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AsignaturaService } from './services/asignatura.service';
import { DocenteRegistroComponent } from './comite/docente/docente-registro/docente-registro.component';
import { DocenteConsultaComponent } from './comite/docente/docente-consulta/docente-consulta.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CuadroDialogoComponent } from './cuadro-dialogo/cuadro-dialogo.component';
import { FiltroAsignaturaPipe } from './pipe/filtro-asignatura.pipe';
import { AsignaturaEdicionComponent } from './comite/asignatura/asignatura-edicion/asignatura-edicion.component';
import { ModalComponent } from './modal/modal.component';
import { AreaRegistroComponent } from './comite/area/area-registro/area-registro.component';
import { AreaConsultaComponent } from './comite/area/area-consulta/area-consulta.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FiltroAreaPipe } from './pipe/filtro-area.pipe';
import { AreaEdicionComponent } from './comite/area/area-edicion/area-edicion.component';
import { FiltroDocentePipe } from './pipe/filtro-docente.pipe';
import { FiltoAsignaturaAreaPipe } from './pipe/filto-asignatura-area.pipe';
import {MatStepperModule} from '@angular/material/stepper';
import { ProyectoRegistroComponent } from './docenteAsesor/proyecto/proyecto-registro/proyecto-registro.component';
import { ProyectoConsultaComponent } from './docenteAsesor/proyecto/proyecto-consulta/proyecto-consulta.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { EstudianteconsultaComponent } from './comite/estudiante/estudianteconsulta/estudianteconsulta.component';
import { EstudianteConsultaComponent } from './comite/estudiante/estudiante-consulta/estudiante-consulta.component';
import { EstudianteRegistroComponent } from './comite/estudiante/estudiante-registro/estudiante-registro.component';
import { FiltroEstudiantePipe } from './pipe/filtro-estudiante.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AsignaturaRegistroComponent,
    AsignaturaConsultaComponent,
    DocenteRegistroComponent,
    DocenteConsultaComponent,
    CuadroDialogoComponent,
    FiltroAsignaturaPipe,
    AsignaturaEdicionComponent,
    ModalComponent,
    AreaRegistroComponent,
    AreaConsultaComponent,
    FiltroAreaPipe,
    AreaEdicionComponent,
    FiltroDocentePipe,
    FiltoAsignaturaAreaPipe,
    ProyectoRegistroComponent,
    ProyectoConsultaComponent,
    EstudianteconsultaComponent,
    EstudianteConsultaComponent,
    EstudianteRegistroComponent,
    FiltroEstudiantePipe

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents:[CuadroDialogoComponent,ModalComponent],
  providers: [AsignaturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
