import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
   
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/educacion/traer/';

  public getEducacion():Observable<educacion>{
    return this.http.get<educacion>(this.Url +'datos');
  }


}
