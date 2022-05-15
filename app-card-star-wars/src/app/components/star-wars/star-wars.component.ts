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

  public cadastraNovoPersonagem: Starwars = { id: 0, nome: '', habilidade: '', planeta: '', armas: '', avatar: '', info: '' };

  constructor(private starwarsService: StarwarsService) {

  }
  // Trazer todos os dados //
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
  // Trazer dados do ID escolhido //
  public obterIdPersonagem() {
    this.starwarsService.obterSomenteUm().subscribe((dados) => {
      this.error = false;
      this.personagens = dados;
      console.log(JSON.stringify(this.personagens));
    },
      (erro: any) => {
        console.warn('Deu erro aqui', erro);
        this.error = true;
      })
  }
  // Adicionar dados //
  public adicionarPersonagem() {
    return this.starwarsService.postPersonagem(this.cadastraNovoPersonagem).subscribe((cadastra) => {
      this.personagens = cadastra.map((key) => {
        return new Starwars(key.id, key.nome, key.habilidade, key.planeta, key.armas, key.avatar, key.info)
      });
      console.log(this.personagens);
    })
  }
  // Atualizar dados //
  public atualizarPersonagem() {

  }
  // Deletar dados //
  public delete(id: number) {
    return this.starwarsService.delete(id).subscribe(() => {
      console.log(this.personagens);
    })
  }
}
