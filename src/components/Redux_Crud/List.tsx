import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { state_title } from '../../redux/selectors/crud';
import { IState, IListTile } from '../../redux/ts/interface';

const List: React.FC<any> = ({ title }) => {
  return (
    <div className='list'>
      <header>{title}</header>
    </div>
  )
};

const mapStateToProps = createStructuredSelector<IState, IListTile>({
  title: state_title
});

export default connect(mapStateToProps, {})(List);