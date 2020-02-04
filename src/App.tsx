import React from 'react';
import Form from './components/ToDo/Form';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Typescript from './components/Typescript/Typescript';

export const App = (): JSX.Element => {
  return (
    <div className='app'>
      <TicTacToe />
      <Typescript />
      <Form />
    </ div>
  )
};