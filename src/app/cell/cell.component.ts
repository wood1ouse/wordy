import { Cell, Word } from '@models/grid';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'wordy-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent {
  @Input() cell: Cell;

  words: Word[] = [
    {
      guessed: false,
      letters: [
        {
          value: 'S',
          x: 2,
          y: 1,
        },
        {
          value: 'C',
          x: 2,
          y: 2,
        },
        {
          value: 'A',
          x: 2,
          y: 3,
        },
        {
          value: 'N',
          x: 2,
          y: 4,
        },
        {
          value: 'S',
          x: 2,
          y: 5,
        },
      ],
    },
    {
      guessed: true,
      letters: [
        {
          value: 'C',
          x: 1,
          y: 3,
        },
        {
          value: 'A',
          x: 2,
          y: 3,
        },
        {
          value: 'T',
          x: 3,
          y: 3,
        },
        {
          value: 'S',
          x: 4,
          y: 3,
        },
      ],
    },
    {
      guessed: false,
      letters: [
        {
          value: '',
          x: 4,
          y: 2,
        },
        {
          value: '',
          x: 4,
          y: 3,
        },
        {
          value: '',
          x: 4,
          y: 4,
        },
      ],
    },
    {
      guessed: false,
      letters: [
        {
          value: '',
          x: 4,
          y: 2,
        },
        {
          value: '',
          x: 5,
          y: 2,
        },
        {
          value: '',
          x: 6,
          y: 2,
        },
      ],
    },
  ];

  showCell(cell: Cell): void {
    console.log(`[${cell.x} ${cell.y}]`);
  }
}
