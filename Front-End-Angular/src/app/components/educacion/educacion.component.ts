import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import{EducacionService}from '../../service/educacion.service'

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:educacion =new educacion("","","","","");

  constructor(public educacionService:EducacionService, private router:Router) { }

  ngOnInit() {
   this.educacionService.getEducacion().subscribe(data=>{this.educacion=data;})
  }

}
