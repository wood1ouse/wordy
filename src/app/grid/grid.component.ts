import { Component, OnInit } from '@angular/core';

import { Cell } from '@models/grid';

import { generateField } from '@uitls/common';

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
}
