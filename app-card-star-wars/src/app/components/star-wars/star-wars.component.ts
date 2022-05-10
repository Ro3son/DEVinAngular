import { Component } from '@angular/core';
import { StarWars } from './personagens';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent {
  public personagens = [
    {
      "id": 1,
      "nome": "Yoda",
      "habilidade": "Mestre Jedi capaz de bloquear o relâmpago da Força desarmado e um formidável praticante do combate de sabre de luz ",
      "planeta": "Dagobah",
      "armas": "Sabre de luz verde",
      "avatar": "http://especiais.ne10.uol.com.br/starwars/wp-content/uploads/2015/12/yoda-300x300.png",
      "+info": "https://starwars.fandom.com/pt/wiki/Yoda"
    },
    {
      "id": 2,
      "nome": "Luke Skywalker",
      "habilidade": "Jedi. Além de compartilhar das habilidades naturais de piloto da sua família, Luke Skywalker desenvolveu habilidades para reparos mecânicos enquanto procurava por droides e consertava vaporizadores de umidade.",
      "planeta": "Tatooine",
      "armas": "Sabre de Luz verde",
      "avatar": "http://especiais.ne10.uol.com.br/starwars/wp-content/uploads/2015/12/luke-300x300.png"
    },
    {
      "id": 3,
      "nome": "Princesa Leia",
      "habilidade": "Política. Ruína dos Troopers: Essa habilidade de combate permite que Leia mate instantaneamente Stormtroopers com um único tiro. Escudo de Esquadrão Melhorado: uma versão mais poderosa do Escudo de Esquadrão normal que também pode parar ataques da Força.",
      "planeta": "Alderaan",
      "armas": "Blaster",
      "avatar": "http://especiais.ne10.uol.com.br/starwars/wp-content/uploads/2015/12/leia-1-300x300.png"
    },
    {
      "id": 4,
      "nome": "Darth Vader",
      "habilidade": "Darth Vader lança seu sabre de luz, enforca os adversários e usa sua fúria profunda. Fúria Concentrada: Darth Vader causa mais dano e pode absorver mais dano.",
      "planeta": "Tatooine",
      "armas": "Sabre de luz azul / vermelho",
      "avatar": "http://especiais.ne10.uol.com.br/starwars/wp-content/uploads/2015/12/darth_vader-300x300.png"
    },
    {
      "id": 5,
      "nome": "R2-D2",
      "habilidade": "Possui inúmeras ferramentas como serra elétrica, solda, projetor holográfico e propulsor de foguete",
      "planeta": "Naboo",
      "armas": "Serra e bastão",
      "avatar": "http://especiais.ne10.uol.com.br/starwars/wp-content/uploads/2015/12/R2D2-300x300.png"
    },
    {
      "id": 6,
      "nome": "C-3PO",
      "habilidade": "Fluente em mais de 6 milhões de línguas. Afiliação. C-3PO foi um droide de protocolo que tinha a capacidade de falar e entender mais de seis milhões de idiomas. C-3PO foi construído em Affa, reconstruido por Anakin Skywalker em Tatooine. Ele foi companheiro por muito tempo do droide astromecânico R2-D2",
      "planeta": "Affa(reconstruído em Tatooine)",
      "armas": "Não usa armas.",
      "avatar": "http://especiais.ne10.uol.com.br/starwars/wp-content/uploads/2015/12/C3PO-300x300.png"
    }
  ]

  // public personagens: StarWars = {
  //   id: 0,
  //   nome: '',
  //   habilidade: '',
  //   planeta: '',
  //   armas: '',
  //   avatar: ''
  // }
}

