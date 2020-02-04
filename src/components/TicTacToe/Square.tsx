import React from 'react';
import { ISquareProps } from './utils/interface';

const Square: React.FC<ISquareProps> = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
)

export default Square;