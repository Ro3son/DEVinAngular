import { Component, OnInit } from '@angular/core';
import { Starwars } from 'src/app/classes/starwars';
import { StarWars } from 'src/app/interfaces/star-wars';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  public personagens: StarWars[] = [];

  public personagemId = [];

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() { this.obterTodosPersonagens() }

  public obterTodosPersonagens() {
    this.starwarsService.getPersonagens().subscribe((dados) => {
      this.personagens = dados;
      console.log(JSON.stringify(this.personagens));
    });
  }
  public obterIdPersonagem() {
    this.starwarsService.obterSomenteUm().subscribe((response: any) => {
      this.personagemId = response;
      console.log(JSON.stringify(this.personagemId));
    });
  }
  public delete(id: number) {
    this.starwarsService.delete(id).subscribe(() => {
      alert('Personagem Deletado');
    });
  }
}
