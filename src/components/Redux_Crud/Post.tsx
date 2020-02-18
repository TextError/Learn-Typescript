import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../redux/actions/crud';
import { IPostComponent } from './ts/interface';

const Post: React.FC<IPostComponent> = ({ id, post, deletePost }) => {

  const onDelete = () => deletePost(id);

  return (
    <div className='post'>
      <p>{post}</p>
      <button type='button' onClick={onDelete} >X</button>
    </div>
  )
}

export default connect(null, { deletePost })(Post);