import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { setPost, IAction } from '../../redux/actions/crud';
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

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, IAction>) => ({
  setPost: (title: string) => dispatch(setPost(title))
});

export default connect(null, mapDispatchToProps)(Crud);