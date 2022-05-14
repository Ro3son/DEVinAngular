import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  public requestURL = environment.API_Path;

  constructor(private http: HttpClient) { }

  // Requisita informações do banco de dados //
  public getPersonagens(): Observable<any[]> {
    return this.http.get<any[]>(this.requestURL);
  }
  // Requisita somente uma informação //
  public obterSomenteUm() {

  }
  // Cadastra informações //
  public postPersonagem() {

  }
  // Atualiza informações //
  public putPersonagem() {

  }
  // Deleta informações //
  public delete() {

  }
}
