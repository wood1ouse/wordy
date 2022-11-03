export interface Cell {
  x: number;
  y: number;
}

export interface Letter extends Cell {
  value: string;
}

export interface Word {
  guessed: boolean;
  letters: Letter[];
}

export interface ControlLetter {
  value: string;
  active: boolean;
}
