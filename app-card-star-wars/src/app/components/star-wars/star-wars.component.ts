import { Component } from '@angular/core';
import { Starwars } from 'src/app/classes/starwars';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent {

  public personagens: Starwars[] = [];

  public error: boolean = false;

  constructor(private starwarsService: StarwarsService) {

  }
  // Trazer todos os dados //
  public obterTodosPersonagens() {
    this.starwarsService.getPersonagens().subscribe((dados) => {
      this.error = false;
      this.personagens = dados as [];
      console.log(JSON.stringify(this.personagens));
    },
      (erro: any) => {
        console.warn('Deu erro', erro);
        this.error = true;
      })
  }
  // Trazer dados do ID escolhido //
  public obterIdPersonagem() {
    this.starwarsService.obterSomenteUm().subscribe((dados) => {
      this.error = false;
      this.personagens = dados as [];
      console.log(JSON.stringify(this.personagens));
    },
      (erro: any) => {
        console.warn('Deu erro aqui', erro);
        this.error = true;
      })
  }
  // Adicionar dados //
  public adicionarPersonagem() {

  }
  // Atualizar dados //
  public atualizarPersonagem() {

  }
  // Deletar dados //
  public delete() {

  }
}
