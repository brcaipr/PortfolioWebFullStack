import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyectos[]=[];
  constructor(private proyectosS:ProyectosService, private tokenService:TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyecto(): void {
    this.proyectosS.lista().subscribe(data => { this.proyectos = data; })
  }
  delete(id?: number){
    if(id != undefined){
      this.proyectosS.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar la educacion");
        }
      )
    }
  }
}
