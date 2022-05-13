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

  public getPersonagens(): Observable<any[]> {
    return this.http.get<any[]>(this.requestURL);
  }

  // public getPersonagens() {
  //   this.http.get(this.requestURL)
  //   .toPromise().then((response) => {
  //    console.log(response);
  //    return response;
  //   })
  //   .catch((error) => {
  //     console.log('Deu erro: ' + error);
  //     return error;
  //   });
  // }
}
