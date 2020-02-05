import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setItem } from '../../redux/actions/crud';

import List from './List';
import Form from './Form';

const Crud: React.FC<any> = ({ setItem }) => {
  
  useEffect(() => {
    setItem({ post: 'This is a Title post!' });
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