import React, { useState } from 'react';
import { inputEvt, formSubmit, IInputState } from './ts/interface';
import Input from '../common/form/input/Input';
import isEmpty from '../common/utils/isEmpty';

const Form: React.FC = () => {
  const [state, setState] = useState<IInputState>({ input: '', error: '' });
  const {input, error} = state;

  const onChange = (e: inputEvt) => setState({ ...state, input: e.target.value });
  const onFocus = () => !isEmpty(error) && setState({ ...state, error: '' });

  const onSubmit = (e: formSubmit) => {
    e.preventDefault();
    if(isEmpty(input)) return setState({ ...state, error: 'Input field is required!' });
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <Input
        name='input'
        label='Enter text here!'
        value={input}
        onChange={onChange}
        onFocus={onFocus}
        type='text'
        error={error}
      />
      <button type='submit'>Submit</button>
    </form>
  )
};

export default Form;