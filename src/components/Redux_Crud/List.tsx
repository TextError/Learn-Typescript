import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_title, state_posts } from '../../redux/selectors/crud';
import { IState, IListSelector, IListProps,  } from '../../redux/ts/interface';

const List: React.FC<IListProps> = ({ title, posts }) => {
  return (
    <div className='list'>
      <header>{title}</header>
    </div>
  )
};

const mapStateToProps = createStructuredSelector<IState, IListSelector>({
  title: state_title,
  posts: state_posts
});

export default connect(mapStateToProps, {})(List);