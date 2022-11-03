import { Word } from './../../models/grid';
import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/models/grid';
import { generateField } from 'src/utils/common';

@Component({
  selector: 'wordy-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  cells: Cell[];

  ngOnInit(): void {
    this.cells = generateField(5, 6);
  }

  isVertical(word: Word): boolean {
    return word.letters[0].y < word.letters[1].y;
  }
}
