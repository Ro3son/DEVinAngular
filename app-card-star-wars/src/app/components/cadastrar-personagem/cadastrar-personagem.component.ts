import { Component, OnInit } from '@angular/core';
import { Starwars } from 'src/app/classes/starwars';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-cadastrar-personagem',
  templateUrl: './cadastrar-personagem.component.html',
  styleUrls: ['./cadastrar-personagem.component.scss']
})
export class CadastrarPersonagemComponent implements OnInit {

  public personagens: Starwars[] = [];

  public cadastrarPersonagem: Starwars = {
    id: 0, nome: '', habilidade: '', planeta: '',
    armas: '', avatar: '', info: ''
  };

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() { }

  public adicionarPersonagem() {
    return this.starwarsService.postPersonagem(this.cadastrarPersonagem).subscribe((cadastra) => {
      this.personagens = cadastra.map((key) => {
        return new Starwars(
            { id: key.id, nome: key.nome, habilidade: key.habilidade, planeta: key.planeta, armas: key.armas, avatar: key.avatar, info: key.info })
      });
      console.log(this.personagens);
    });
  }
}
