import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.css']
})
export class MorpionComponent implements OnInit {
  grid : string[][][];

  constructor() {
    this.grid = [[[''], [''], ['']], [[''], [''], ['']], [[''], [''], ['']]];
  }

  ngOnInit(): void {

  }

  clickOnCell(cell: string[]) {
    cell[0] = 'X';
    let [row1, row2, row3] = this.grid;
    console.log(row1);
  }
}
