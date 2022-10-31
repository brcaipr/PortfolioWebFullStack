import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from '../model/acerca-de';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  acercaURL = 'https://backendbr.herokuapp.com/acercade/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<AcercaDe[]>{
    return this.httpClient.get<AcercaDe[]>(this.acercaURL + 'lista');
  }

  public detail(id: number): Observable<AcercaDe>{
    return this.httpClient.get<AcercaDe>(this.acercaURL + `detail/${id}`);
  } 
  public save(acerca: AcercaDe): Observable<any>{
    return this.httpClient.post<any>(this.acercaURL + 'create', acerca);
  }
  public update(id: number, acerca: AcercaDe): Observable<any>{
    return this.httpClient.put<any>(this.acercaURL + `update/${id}`, acerca);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.acercaURL + `delete/${id}`);
  }

}
