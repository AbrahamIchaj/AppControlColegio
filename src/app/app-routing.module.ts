import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './formularios/alumno/alumno.component';
import { AsignaturaComponent } from './formularios/asignatura/asignatura.component';
import { GradoSeccionComponent } from './formularios/grado-seccion/grado-seccion.component';
import { InscripcionComponent } from './formularios/inscripcion/inscripcion.component';
import { NotasComponent } from './formularios/notas/notas.component';
import { ParentescoComponent } from './formularios/parentesco/parentesco.component';
import { ProfesorComponent } from './formularios/profesor/profesor.component';
import { UsuarioComponent } from './formularios/usuario/usuario.component';

const routes: Routes = [

  
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
