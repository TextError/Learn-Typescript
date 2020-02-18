import { IPost } from "../ts/interface";

export enum POST {
  SET = 'SET_POST',
  ADD = 'ADD_POST',
  EDIT = 'EDIT_POST',
  REMOVE = 'REMOVE_POST'
};


export interface ISetPost { type: typeof POST.SET; payload: string };
export interface IAddPost { type: typeof POST.ADD; payload: IPost };

export type IAction = ISetPost | IAddPost;