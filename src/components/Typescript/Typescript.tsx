import React, { useState } from 'react';
import TextField from './TextField';

const Typescript: React.FC = () => {
  const [text, setText] = useState<number | undefined | string>('Hello');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => setText(e.target.value)
  return (
    <div className='typescript'>
      <TextField text={text} person={{fName:'Bob', lName:'Marley'}} onChange={onChange} />
    </div>
  )
}

export default Typescript;