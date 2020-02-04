import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { IBoardProps } from './utils/interface';
import Square from './Square';

const Board: React.FC<IBoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i:number): ReactNode => <Square value={squares[i]} onClick={() => onClick(i)} />

  return (
    <div>
      <div className='bord-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='bord-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='bord-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

Board.propTypes = {

}

export default Board;