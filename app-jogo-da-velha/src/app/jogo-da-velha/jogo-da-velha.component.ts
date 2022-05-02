import { Component } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent {
// Variables //
  public title: string = '< jogo-da-véia />';

  public player1: string = '';

  public p1: string = '';

  public player2: string = '';

  public winner: string = '';

  public board: string[][] = [
    // cols and rows //
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  constructor() { }
// Functions //
  public select1() {
    this.player1 = 'O',
      this.player2 = 'X';
  }
  public select2() {
    this.player1 = 'X',
      this.player2 = 'O';
  }
  public playRound(line: number, col: number) {
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.p1
      if (this.checkWinner(this.p1)) {
        this.winner = this.p1;
      }
    }
    let changePlayer = (this.p1 == 'O') ? this.p1 = 'X' : this.p1 = 'O';
  }
  public checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true;
      }
    }
    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2]) {
      return true;
    }
    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0]) {
      return true;
    }
    return false;
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
