import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  input: string = '';

  @Output() saida = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.saida);
  }

  dataFromChildToParent(value: string) {
    this.saida.emit(this.input);
    this.input = '';
  }

}
