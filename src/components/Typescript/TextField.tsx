import React, { useRef } from 'react';
import PropTypes from 'prop-types';

interface Person {
  fName: string
  lName: string
}

interface ITextField {
  text: number | undefined | string
  person: Person
  ok?: boolean
  i?: number
  fn?: (bob: string) => string // ? means optional
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<ITextField> = ({ text, person: { fName, lName }, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <> {text} {' '} {fName} {lName} </>
      <input ref={inputRef} onChange={onChange} />
    </div>
  )
}

TextField.propTypes = {

}

export default TextField;