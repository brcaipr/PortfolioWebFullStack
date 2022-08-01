import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-add-acerca-de',
  templateUrl: './add-acerca-de.component.html',
  styleUrls: ['./add-acerca-de.component.css']
})
export class AddAcercaDeComponent implements OnInit {

  nombre: string = '';
  titulo: string='';
  acercaDe:string='';
  fotoUrl:string='';
  

  constructor(private sAcercaDe: AcercaDeService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const acerca = new AcercaDe(this.nombre,this.titulo, this.acercaDe,this.fotoUrl);
    this.sAcercaDe.save(acerca).subscribe(
      data => {
        alert("Datos de persona actualizado");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
