export type squareValue = 'X' | 'O' | null

export interface ISquareProps {
  value: squareValue;
  onClick(): void;
};

export interface IBoardProps {
  onClick(i: number): void;
  squares: squareValue[];
};