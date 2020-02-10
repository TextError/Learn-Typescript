import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_title, state_posts } from '../../redux/selectors/crud';
import { IAppState, IListSelector } from '../../redux/ts/interface';
import { IListProps } from './ts/interface';

const List: React.FC<IListProps> = ({ title, posts }) => {
  return (
    <div className='list'>
      <header>{title}</header>
    </div>
  )
};

const mapStateToProps = createStructuredSelector<IAppState, IListSelector>({
  title: state_title,
  posts: state_posts
});

export default connect(mapStateToProps, {})(List);