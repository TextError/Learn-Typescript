import { IPost } from "../ts/interface";

export enum POST {
  SET = 'SET_POST',
  ADD = 'ADD_POST',
  EDIT = 'EDIT_POST',
  DELETE = 'DELETE_POST'
};


export interface ISetPost { type: typeof POST.SET; payload: string };
export interface IAddPost { type: typeof POST.ADD; payload: IPost };
export interface IDeletePost { type: typeof POST.DELETE; payload: number };

export type IAction = ISetPost | IAddPost | IDeletePost;