import React, { useState } from 'react';
import { squareValue } from './utils/interface';
import Board from './Board';

const Game: React.FC = () => {
  const [xIsNext, setXisNext] = useState<boolean>(true);
  const [number, setNumber] = useState<number>(0);
  const [history, setHistory] = useState<{squares: squareValue[]}[]>([{squares: Array(9).fill(null)}]);
  
  const calculateWinner = (squares: squareValue[]): squareValue => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const onClick = (i: number): void => {
    const newHistory = history.slice(0, number + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    };
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([{squares}]));
    setNumber(newHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step: number): void => {
    setNumber(step);
    setXisNext((step % 2) === 0);
  };

  const current = history[number];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return <li key={move}><button onClick={() => jumpTo(move)}>{desc}</button></li>
  });

  let status;
  if(winner) status = 'Winner: ' + winner;
  if(!winner) status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => onClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
};

export default Game;