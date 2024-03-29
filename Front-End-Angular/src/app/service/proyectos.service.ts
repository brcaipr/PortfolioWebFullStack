import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL = 'https://backendbr.herokuapp.com/proyectos/';

  constructor(private httpClient : HttpClient) { }

  public lista():Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + `lista`);
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }
  
  public save(skill: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, skill);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`,proyectos);
  }

  public delete (id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
