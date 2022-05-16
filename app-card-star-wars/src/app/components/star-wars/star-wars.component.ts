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

  public cadastraNovoPersonagem: Starwars = { id: 0, nome: '', habilidade: '', planeta: '', armas: '', avatar: '', info: '' };

  public editaPersonagem: Starwars = { id: 6, nome: 'Yoda', habilidade: 'Mestre Jedi', planeta: 'Dagobah', armas: 'Sabre de luz verde', avatar: 'http://especiais.ne10.uol.com.br/starwars/wp-content/uploads/2015/12/yoda-300x300.png', info: 'https://starwars.fandom.com/pt/wiki/Yoda' };

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit(): void {
    this.obterTodosPersonagens();
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
    return this.starwarsService.obterSomenteUm().subscribe((dados) => {
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
    return this.starwarsService.putPersonagem(this.editaPersonagem).subscribe(() => {
      console.log('Personagem Atualizado');
    })
  }
  // Deletar dados //
  public delete(id: number) {
    return this.starwarsService.delete(id).subscribe(() => {
      console.log(this.personagens);
    })
  }
}
