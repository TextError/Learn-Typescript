import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPost } from '../../redux/actions/crud';
import { ISetPost } from './ts/interface';

import List from './List';
import Form from './Form';

const Crud: React.FC<ISetPost> = ({ setPost }) => {
  
  useEffect(() => {
    setPost('This is a Title post!');
    // eslint-disable-next-line
  },[])


  return (
    <div className='crud'>
      <Form/>
      <List />
    </div>
  )
};

export default connect(null, { setPost })(Crud);