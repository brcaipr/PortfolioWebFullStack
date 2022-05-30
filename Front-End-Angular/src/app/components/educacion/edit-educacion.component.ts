import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

 

  constructor(
    private educacionService:EducacionService,
    private activatedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private router:Router

  ) { }

  ngOnInit():void {
 
    
  }

  
}
