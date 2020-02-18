import { POST } from "../../../redux/actions/types";
import { IPost } from "../../../redux/ts/interface";

export type formSubmit = React.FormEvent<HTMLFormElement>;
export type inputEvt = React.ChangeEvent<HTMLInputElement>;

export interface IofInput {
  name: string; 
  label: string;
  value: string | number; 
  onChange: (e: inputEvt) => void;
  onFocus(): void;
  type: string;
  error: string;
}

export interface IofInputState {
  input: string; 
  error: string;
  id: number;
}

export interface IListProps {
  title: string,
  posts: IPost[]
}

export interface ISetPost {
  setPost: (title: string) => { type: POST .SET; payload: string; };
}