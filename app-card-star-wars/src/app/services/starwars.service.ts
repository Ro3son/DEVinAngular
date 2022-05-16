import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Starwars } from '../classes/starwars';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  public requestURL = environment.API_Path;

  constructor(private http: HttpClient) { }

  // Requisita informações do banco de dados //
  public getPersonagens(): Observable<Starwars[]> {
    return this.http.get<Starwars[]>(this.requestURL);
  }
  // Requisita somente uma informação //
  public obterSomenteUm(): Observable<Starwars[]> {
    return this.http.get<Starwars[]>(`${this.requestURL}/${5}`);
  }
  // Cadastra informações //
  public postPersonagem(data: any): Observable<Starwars[]> {
    return this.http.post<Starwars[]>(`${this.requestURL}`, data);
  }
  // Atualiza informações //
  public putPersonagem(data: any): Observable<Starwars[]> {
    return this.http.put<Starwars[]>(`${this.requestURL}/${6}`, data);
  }
  // Deleta informações //
  public delete(id: number): Observable<Starwars[]> {
    return this.http.delete<Starwars[]>(`${this.requestURL}/${id}`);
  }
}
