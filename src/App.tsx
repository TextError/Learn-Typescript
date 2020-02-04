import React from 'react';
import Form from './components/ToDo/Form';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Typescript from './components/Typescript/Typescript';
import Crud from './components/Redux_Crud/Crud';

const App = (): JSX.Element => {
  return (
    <div className='app'>
      <TicTacToe />
      <Typescript />
      <Form />
      <Crud />
    </div>
  )
};

export default App;