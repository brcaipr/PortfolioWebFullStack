import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  nombre:string ='';
  detalle:string='';
  img:string='';

  constructor(private proyectosS:ProyectosService,private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombre, this.detalle, this.img);
    this.proyectosS.save(proyectos).subscribe(
    data=> {
      alert("Proyecto creado correctamente");
      this.router.navigate(['']);
    },err =>{
      alert("Fallo al añadir el proyecto");
      this.router.navigate(['']);
    }
    )
  }

}
