import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Starwars } from 'src/app/classes/starwars';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-editar-personagem',
  templateUrl: './editar-personagem.component.html',
  styleUrls: ['./editar-personagem.component.scss']
})
export class EditarPersonagemComponent implements OnInit {

  public form = this.fb.group({
    nome: [''],
    habilidade: [''],
    planeta: [''],
    armas: [''],
    avatar: [''],
    info: ['']
  });

  public personagens: Starwars[] = [];

  public editaPersonagem: Starwars = {
    id: 0, nome: '', habilidade: '', planeta: '',
    armas: '', avatar: '', info: ''
  };

  constructor(
    private starwarsService: StarwarsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() { }

  public onSubmit() { }

  public atualizarPersonagem() {
    return this.starwarsService.putPersonagem(this.editaPersonagem).subscribe(() => {
      this.personagens.map((key) => {
        return new Starwars(
          key.id, key.nome, key.habilidade, key.planeta,
          key.armas, key.avatar, key.info);
      });
      alert('Personagem Atualizado');
    })
  }
}