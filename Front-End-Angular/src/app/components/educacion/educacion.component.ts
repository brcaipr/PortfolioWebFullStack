import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  Educaciones:Educacion[] = [];
  

  constructor(private educacionService:EducacionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getEducacion();
   
  }

  getEducacion(): void{
    this.educacionService.lista().subscribe(
      data=>{
        this.Educaciones=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

 borrar(id:number){
   alert('borrar el '+id);
 }
}
