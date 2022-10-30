import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import{FormsModule}from '@angular/forms';
import { AddExperienciaComponent } from './components/experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { AddAcercaDeComponent } from './components/acerca-de/add-acerca-de.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { AddEducacionComponent } from './components/educacion/add-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { AddSkillComponent } from './components/skills/add-skill.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { AddProyectoComponent } from './components/proyecto/add-proyecto.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    
    SkillsComponent,
    ProyectoComponent,
    FooterComponent,
    AddExperienciaComponent,
    EditExperienciaComponent,
    LoginComponent,
    HomeComponent,
    AddAcercaDeComponent,
    EditAcercaDeComponent,
    EducacionComponent,
    AddEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    AddSkillComponent,
    EditProyectoComponent,
    AddProyectoComponent,
    
   
  
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  
  ],
  providers: [
  interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
