import { Component } from '@angular/core';
import { StarWars } from './personagens';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent {

  personagens: StarWars = {
    id: 0,
    nome: '',
    habilidade: '',
    planeta: '',
    armas: '',
    avatar: ''
  }
}

