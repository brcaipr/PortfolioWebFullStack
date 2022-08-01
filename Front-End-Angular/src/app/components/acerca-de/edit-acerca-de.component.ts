import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  acerca: AcercaDe = null;

  constructor(private sAcercaDe: AcercaDeService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sAcercaDe.detail(id).subscribe(
        data =>{
          this.acerca = data;
        }, err =>{
          alert("Error al modificar datos personales");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sAcercaDe.update(id, this.acerca).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar datos personales");
           this.router.navigate(['']);
        }
      )
    }

}
