import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/Educacion';



@Injectable({
  providedIn: 'root'
})
export class EducacionService {


  educacionURL='http://localhost:8080/educacion/';
   
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.educacionURL+'traer')
  }
  
  public crear(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.educacionURL+'crear',educacion);
  }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educacionURL+ `eliminar/${id}`);
  }

}
