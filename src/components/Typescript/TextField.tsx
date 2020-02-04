import React, { useRef } from 'react';

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
  children?: () => JSX.Element
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

export default TextField;