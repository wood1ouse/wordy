import { ControlLetter } from '@models/grid';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'wordy-control-letter',
  templateUrl: './control-letter.component.html',
  styleUrls: ['./control-letter.component.scss'],
})
export class ControlLetterComponent {
  @Input() letter: ControlLetter;

  active: boolean;

  toggleActive() {
    this.letter.active = !this.letter.active;
  }
}
