import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  public resultado: string = '';

  constructor() { }
 
  recebiDadoDoFilho(respostaFilho: string) {
    this.resultado = respostaFilho;
    console.log(respostaFilho);
  }

}
