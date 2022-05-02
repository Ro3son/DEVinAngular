import { Component } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent {

  public title: string = '< jogo-da-véia />';

  public player1: string = '';

  public player2: string = '';

  public winner: string = '';

  public board: string[][] = [
    // cols and rows //
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  constructor() { }

  public select1() {
    this.player1 = 'O', 
    this.player2 = 'X';
  }
  public select2() {
    this.player1 = 'X', 
    this.player2 = 'O';
  }
  public playRound(line: number, col: number) {
    if (this.board[line][col] == '') {
      this.board[line][col] = this.player1;
    }
    if (this.player1 == 'O') {
        this.player1;
    } 
    if (this.player2 == 'X') {
      this.player2;
    } 
  }
  public checkWinner(player: string) {

  }
  public reset() {
    this.player1 = '';
    this.player2 = '';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  }
}
