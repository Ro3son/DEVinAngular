import { Component, OnInit } from '@angular/core';
import { Starwars } from 'src/app/classes/starwars';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  public personagens: Starwars[] = [];

  public error: boolean = false;

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() { this.obterTodosPersonagens() }

  public obterTodosPersonagens() {
    this.starwarsService.getPersonagens().subscribe((dados) => {
      this.error = false;
      this.personagens = dados;
      console.log(JSON.stringify(this.personagens));
    },
      (erro: any) => {
        console.warn('Deu erro', erro);
        this.error = true;
      })
  }
  public obterIdPersonagem(id: number) {
    this.starwarsService.obterSomenteUm(id).subscribe((dados) => {
      this.error = false;
      this.personagens = dados;
      console.log(JSON.stringify(this.personagens));
    },
      (erro: any) => {
        console.warn('Deu erro aqui', erro);
        this.error = true;
      });
  }
  public delete(id: number) {
    this.starwarsService.delete(id).subscribe(() => {
      alert('Personagem Deletado');
    });
  }
}
