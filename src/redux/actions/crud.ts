import { POST, IAction } from "./types";
import { ThunkDispatch } from "redux-thunk";
import { IPost } from "../ts/interface";

export const setPost = (title: string) => (dispatch: ThunkDispatch<any, any, IAction>) => {
  dispatch({ type: POST.SET, payload: title })
};

export const addPost = (post: IPost ) => (dispatch: ThunkDispatch<any, any, IAction>) => {
  dispatch({ type: POST.ADD, payload: post })
};

export const deletePost = (id: number ) => (dispatch: ThunkDispatch<any, any, IAction>) => {
  dispatch({ type: POST.DELETE, payload: id })
};