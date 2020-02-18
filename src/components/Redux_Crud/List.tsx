import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_title, state_posts } from '../../redux/selectors/crud';
import { IListSelector, ISelectorState } from '../../redux/ts/interface';
import { IListProps } from './ts/interface';
import isEmpty from '../common/utils/isEmpty';
import Post from './Post';

const List: React.FC<IListProps> = ({ title, posts }) => {
  return (
    <div className='list'>
      <div>{title}</div>
      { !isEmpty(posts) && posts.map(el => <Post key={el.id} {...el} />) }
    </div>
  )
};

const mapStateToProps = createStructuredSelector<ISelectorState, IListSelector>({
  title: state_title,
  posts: state_posts
});

export default connect(mapStateToProps, {})(List);