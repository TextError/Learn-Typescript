import React from 'react';
import Form from './components/ToDo/Form';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Typescript from './components/Typescript/Typescript';

const App = (): JSX.Element => {
  return (
    <div className='app'>
      <TicTacToe />
      <Typescript />
      <Form />
    </ div>
  )
};

export default App;