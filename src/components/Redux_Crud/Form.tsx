import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../redux/actions/crud';
import { inputEvt, formSubmit, IofInputState } from './ts/interface';
import isEmpty from '../common/utils/isEmpty';
import { IAddPost } from './ts/interface';

import Input from '../common/form/input/Input';

const Form: React.FC<IAddPost> = ({ addPost }) => {
  const [state, setState] = useState<IofInputState>({ input: '', error: '', id: 1 });
  const {input, error, id} = state;

  const onChange = (e: inputEvt) => setState({ ...state, input: e.target.value });
  const onFocus = () => !isEmpty(error) && setState({ ...state, error: '' });

  const onSubmit = (e: formSubmit) => {
    e.preventDefault();
    if(isEmpty(input)) return setState({ ...state, error: 'Input field is required!' });
    addPost({ post: input, id });
    setState({ ...state, input: '', id: id + 1 });
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

export default connect(null, { addPost })(Form);