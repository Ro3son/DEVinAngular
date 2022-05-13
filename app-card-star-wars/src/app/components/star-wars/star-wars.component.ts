import { Component } from '@angular/core';
import { Starwars } from 'src/app/classes/starwars';
import { StarwarsService } from 'src/app/services/starwars.service';
import { OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  public personagens!: any[];

  public error: boolean = false;

  constructor(private starwarsService: StarwarsService) {

  }
  ngOnInit() {
    this.obterTodos();
  }

  public obterTodos() {
    this.starwarsService.getPersonagens().subscribe((dados: any) => {
      this.error = false;
      this.personagens = dados;
    },
      (erro: any) => {
        console.warn('Deu erro', erro);
        this.error = true;
      })
  }
}
