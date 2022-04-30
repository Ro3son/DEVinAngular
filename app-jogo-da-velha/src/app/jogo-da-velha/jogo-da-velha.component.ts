import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {
// Variables //
  public player1: string = 'O';

  public winner: string = '';

  public board: string[][] = [
    // Colunas //
    ['','',''],
    ['','',''],
    ['','','']
  ]

  constructor() { }

  public processPlay(line: number, col: number) {
    // console.log(`A jogada aconteceu na linha ${line} e na coluna ${col} e o jogador ${this.player1}`)
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.player1;
      //verifica jogador //
      if (this.checkWinner(this.player1)) {
        this.winner = this.player1;
      }
      // trocar jogador //
     if(this.player1 == 'O') {
       this.player1 = 'X';
     } else {
       this.player1 = 'O';
      }
    }
  }
  public checkWinner(player: string): boolean {
    for(let i = 0; i < this.board.length; i++) {
      if(this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
    }
    for(let i = 0; i < this.board.length; i++) {
      if(this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
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
    this.player1 = 'O';
    this.winner = '';
    this.board = [
      ['','',''],
      ['','',''],
      ['','','']
    ]
  }
  ngOnInit(): void {
  }
}
