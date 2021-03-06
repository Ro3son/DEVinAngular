import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
})
export class NumberComponent implements OnInit {
  // Variables / Properties //
  public inputValue1: number = 0;

  public inputValue2: number = 0;

  public resultado: any;

  constructor() { }

  ngOnInit(): void { }

  // Functions for all of the basic math operators //
  add() {
    const soma = this.inputValue1 + this.inputValue2;
    this.resultado = `${this.inputValue1} + ${this.inputValue2} = ${soma}`;
  }
  subtract() {
    const subtrai = this.inputValue1 - this.inputValue2;
    this.resultado = `${this.inputValue1} - ${this.inputValue2} = ${subtrai}`;
  }
  multiply() {
    const multiplica = this.inputValue1 * this.inputValue2;
    this.resultado = `${this.inputValue1} * ${this.inputValue2} = ${multiplica}`;
  }
  divide() {
    const divide = this.inputValue1 / this.inputValue2;
    this.resultado = `${this.inputValue1} / ${this.inputValue2} = ${divide}`;
  }
  clear() {
    this.resultado = '';
    this.inputValue1 = 0;
    this.inputValue2 = 0;
  }
}
