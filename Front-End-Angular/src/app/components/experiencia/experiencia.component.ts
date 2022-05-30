import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  Experiencias:Experiencia[]=[];

  constructor(private experienciaService:ExperienciaService,
    private toastr: ToastrService) { }

    ngOnInit() {
      this.getExperiencia();
     
    }

  getExperiencia():void{
    this.experienciaService.lista().subscribe(
      data=>{
        this.Experiencias=data;
      },
      err=>{
        console.log(err);
      }
    )
  }


}
