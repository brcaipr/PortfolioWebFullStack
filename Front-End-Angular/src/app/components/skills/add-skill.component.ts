import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  nombre:string;
  porcentaje:number;
  constructor(private skillS:SkillService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
    data=> {
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    },err =>{
      alert("Fallo al añadir la skill");
      this.router.navigate(['']);
    }
    )
  }

}
