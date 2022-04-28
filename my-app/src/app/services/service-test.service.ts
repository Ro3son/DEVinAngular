import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor(private http: HttpClient) { }
  realizaGet() {
    const requestURL = environment.filmesAPI;
    console.log(requestURL);
    this.http.get(requestURL);
  }
}
