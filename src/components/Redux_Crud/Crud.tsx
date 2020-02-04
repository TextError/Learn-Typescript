import React from 'react';
import List from './List';
import Form from './Form';

const Crud: React.FC = () => {
  return (
    <div className='crud'>
      <Form/>
      <List />
    </div>
  )
}

export default Crud;