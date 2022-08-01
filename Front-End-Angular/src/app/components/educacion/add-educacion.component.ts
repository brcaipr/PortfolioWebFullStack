import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/Educacion';
import { SEducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  nombreE: string = '';
  sedeE: string='';
  anio_inicioE:string='';
  anio_finE:string='';
  descripcionE: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const edu = new Educacion(this.nombreE,this.sedeE, this.anio_inicioE,this.anio_finE,this.descripcionE);
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
