import { ControlLetter } from './../../models/grid';
import { Component } from '@angular/core';

@Component({
  selector: 'wordy-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
  letters: ControlLetter[] = [
    { value: 'A', active: false },
    { value: 'T', active: false },
    { value: 'C', active: false },
    { value: 'S', active: false },
  ];
}
