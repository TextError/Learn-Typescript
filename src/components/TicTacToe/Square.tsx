import React from 'react';
import PropTypes from 'prop-types';
import { ISquareProps } from './utils/interface';

const Square: React.FC<ISquareProps> = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
)

Square.propTypes = {

}

export default Square;