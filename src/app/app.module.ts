import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ParentescoComponent } from './formularios/parentesco/parentesco.component';
import { UsuarioComponent } from './formularios/usuario/usuario.component';
import { ProfesorComponent } from './formularios/profesor/profesor.component';
import { AlumnoComponent } from './formularios/alumno/alumno.component';
import { AsignaturaComponent } from './formularios/asignatura/asignatura.component';
import { GradoSeccionComponent } from './formularios/grado-seccion/grado-seccion.component';
import { NotasComponent } from './formularios/notas/notas.component';
import { InscripcionComponent } from './formularios/inscripcion/inscripcion.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';



const appRoutes:Routes = [
  { path: 'alumno', component: AlumnoComponent },
  { path: 'asignatura', component: AsignaturaComponent },
  { path: 'gradoseccion', component: GradoSeccionComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'parentesco', component: ParentescoComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'usuario', component: UsuarioComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    ParentescoComponent,
    UsuarioComponent,
    ProfesorComponent,
    AlumnoComponent,
    AsignaturaComponent,
    GradoSeccionComponent,
    NotasComponent,
    InscripcionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
