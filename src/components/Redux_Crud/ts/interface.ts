export type formSubmit = React.FormEvent<HTMLFormElement>;
export type inputEvt = React.ChangeEvent<HTMLInputElement>;

export interface IInput {
  name: string; 
  label: string;
  value: string | number; 
  onChange: (e: inputEvt) => void;
  type: string;
  error: string;
}

export interface IInputState {
  input: string; 
  error: string;
}