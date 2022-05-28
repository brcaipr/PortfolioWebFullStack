import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducacionComponent } from './components/educacion/add-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  {path:'agregar-educacion',component:AddEducacionComponent},
  {path:'editar-educacion/:id',component:EditEducacionComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
