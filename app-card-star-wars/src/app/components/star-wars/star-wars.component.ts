import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  public personagemId: any[] = [];

  constructor(
    private starwarsService: StarwarsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
   }

  public obterTodosPersonagens() {
    this.starwarsService.getPersonagens().subscribe((dados) => {
      this.personagens = dados;
      console.log(JSON.stringify(this.personagens));
    });
  }
  public obterIdPersonagem() {
    this.starwarsService.obterSomenteUm().subscribe((response) => {
      this.personagemId.push(response);
      console.log(JSON.stringify(this.personagemId));
    });
  }
  public delete(id: number) {
    this.starwarsService.delete(id).subscribe(() => {
      alert('Personagem Deletado');
    });
  }
}
