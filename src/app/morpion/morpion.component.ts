import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.css']
})
export class MorpionComponent implements OnInit {
  grid: string[][][];
  message: string;
  isX: boolean;
  winner?: string;

  constructor() {
    this.grid = [[[''], [''], ['']], [[''], [''], ['']], [[''], [''], ['']]];
    this.message = "";
    this.isX = true;
  }

  ngOnInit(): void {
  }

  clickOnCell(cell: string[]) {
    if(this.winner) return;

    if(!(cell[0] === '')) {
      this.message = "Cette case est déjà remplie !"
      return;
    }

    this.message = "";
    cell[0] = this.isX ? 'X' : 'O';
    this.isX = !this.isX;

    this.checkSomeoneWon();
  }

  private checkSomeoneWon() {
    // Check rows
    for(let irow of [0, 1, 2]) {
      if(this.grid[irow][0][0] !== '' &&
          this.grid[irow][0][0] === this.grid[irow][1][0] &&
          this.grid[irow][0][0] === this.grid[irow][2][0]
      ) {
        this.winner = this.grid[irow][0][0];
      }
    }

    // Check cols
    for(let icol of [0, 1, 2]) {
      if(this.grid[0][icol][0] !== '' &&
          this.grid[0][icol][0] === this.grid[1][icol][0] &&
          this.grid[0][icol][0] === this.grid[2][icol][0]
      ) {
        this.winner = this.grid[0][icol][0];
      }
    }

    // Check diagonals
    if(this.grid[1][1][0] !== '' &&
        this.grid[0][0][0] === this.grid[1][1][0] &&
        this.grid[0][0][0] === this.grid[2][2][0]
    ) {
      this.winner = this.grid[1][1][0];
    }

    // Check diagonals
    if(this.grid[1][1][0] !== '' &&
        this.grid[2][0][0] === this.grid[1][1][0] &&
        this.grid[0][2][0] === this.grid[1][1][0]
    ) {
      this.winner = this.grid[1][1][0];
    }

    this.addWinnerMessage();
  }

  private addWinnerMessage() {
    if(this.winner) this.message = 'Player '+ this.winner + ' has won';
  }
}
