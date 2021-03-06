import React from 'react';
import classnames from 'classnames';
import isEmpty from '../../utils/isEmpty';

import './input.css';
import { IofInput } from '../../../Redux_Crud/ts/interface';

const Input: React.FC<IofInput> = ({ name, label, value, onChange, onFocus, type, error }) => {  
  const err = !isEmpty(error);
  const val = !isEmpty(value);
  return (
    <div className='input-wrapper'>
      <input 
        className={classnames('input', {'input-border-error': err})}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        autoComplete='off'
        required
      />
      <span className='bar' />
      <label className={classnames('input-label', { 'input-shrink': val || err, 'error': err })} >
        {error ? error : label}
      </label>
    </div>
  )
};

export default Input;