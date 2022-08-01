import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExperienciaComponent } from './components/experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
;

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddAcercaDeComponent } from './components/acerca-de/add-acerca-de.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { AddEducacionComponent } from './components/educacion/add-educacion.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:AddExperienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'nuevosdatos',component:AddAcercaDeComponent},
  {path:'editdatos',component:EditAcercaDeComponent},
  {path:'editedu',component:EditEducacionComponent},
  {path:'nuevaedu',component:AddEducacionComponent}
  

  
  

  
  
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
