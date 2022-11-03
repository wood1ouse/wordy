import { Cell } from 'src/models/grid';

export const generateField = (m: number, n: number): Cell[] => {
  const field = [];
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= m; y++) {
      field.push({
        x,
        y,
      });
    }
  }

  return field;
};
