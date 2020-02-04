import React from 'react';
import Form from './components/ToDo/Form';
import TicTacToe from './components/TicTacToe/TicTacToe';

export const App = (): JSX.Element => {
  return (
    <>
      <Form />
      <TicTacToe />
    </>
  )
};