import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acerca: AcercaDe[] = [];
  constructor(private sAcercaDe: AcercaDeService, private tokenService: TokenService) { }

  

  isLogged = false;

  ngOnInit(): void {
    this.cargarAcercaDe();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcercaDe(): void {
    this.sAcercaDe.lista().subscribe(data => { this.acerca = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sAcercaDe.delete(id).subscribe(
        data => {
          this.cargarAcercaDe();
        }, err => {
          alert("No se pudo borrar acerca de");
        }
      )
    }
  }
}
