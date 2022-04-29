import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor(private http: HttpClient) { }

  // Headers = {
  //   Authorization: 'beared fdfd'
  // }

  // public requestUrl = 'https://api.themoviedb.org/3/movie/110d2cce13d7bd6d5cf7c9157bf67ac8';

public getFilmes(upcoming: any) {
     new Promise((resolve, reject) => {
      this.http.get(environment.filmesAPI + upcoming + '?api_key=110d2cce13d7bd6d5cf7c9157bf67ac8')
        .toPromise().then((data: any) => {
          console.log(data.results[0].original_title);
          resolve(data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
}
