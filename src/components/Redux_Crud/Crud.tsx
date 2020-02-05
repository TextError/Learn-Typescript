import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setItem } from '../../redux/actions/post';

import List from './List';
import Form from './Form';

const Crud: React.FC<any> = ({ setItem }) => {
  
  useEffect(() => {
    setItem({ id: 1, post: 'This is a post!' });
    // eslint-disable-next-line
  },[])


  return (
    <div className='crud'>
      <Form/>
      <List />
    </div>
  )
}

export default connect(null, { setItem })(Crud);