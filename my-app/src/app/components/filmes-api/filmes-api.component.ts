import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from 'src/app/services/service-test.service';

@Component({
  selector: 'app-filmes-api',
  templateUrl: './filmes-api.component.html',
  styleUrls: ['./filmes-api.component.scss']
})
export class FilmesAPIComponent implements OnInit {

  dadosFilme: any;

  constructor(private web: ServiceTestService) { }

  ngOnInit(): void {
    this.carregaDadosFilmes();
  }
  carregaDadosFilmes() {
    this.dadosFilme = this.web.getFilmes('upcoming');
  }
}
