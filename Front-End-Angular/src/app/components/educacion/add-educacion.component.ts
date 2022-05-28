import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  
  nombre = '';
  anio_inicio='';
  anio_fin='';
  detalle='';
  img='';

  constructor(private educacionService:EducacionService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  Crear(): void{
    const educacion = new Educacion(this.nombre,this.anio_inicio,this.anio_fin,this.detalle,this.img);
    this.educacionService.crear(educacion).subscribe(
      data=>{
        this.toastr.success('Educación Creada','Ok',{
          timeOut:3000,positionClass:'toast-top-center'
        });
        this.router.navigate(['/portfolio']);
      },
      err=>{
        this.toastr.success('Educación Creada','Ok',{
          timeOut:3000,positionClass:'toast-top-center',
        });
        this.router.navigate(['/portfolio']);

      }
    )
  }

}
