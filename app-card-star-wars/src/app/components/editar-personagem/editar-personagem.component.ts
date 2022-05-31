import { Component, OnInit } from '@angular/core';
import { Starwars } from 'src/app/classes/starwars';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-editar-personagem',
  templateUrl: './editar-personagem.component.html',
  styleUrls: ['./editar-personagem.component.scss']
})
export class EditarPersonagemComponent implements OnInit {

  public personagens: Starwars[] = [];

  public editaPersonagem: Starwars = {
    id: 0, nome: '', habilidade: '', planeta: '',
    armas: '', avatar: '', info: ''
  };

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() { }

  public atualizarPersonagem() {
    return this.starwarsService.putPersonagem(this.editaPersonagem).subscribe(() => {
      console.log('Personagem Atualizado');
    })
  }
}