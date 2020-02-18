import { POST } from "./types";
import { IActionUnion } from "./utils";
import { IPost } from "../ts/interface";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const createAction = <T extends POST, P>(type: T) => (payload: P) => {
  return {
    type,
    payload
  };
};

// export const setPost = (type: POST.SET, payload: string) => { return { type, payload } };
// export const setPost = (payload: string): any => (dispatch: any) => {
//   dispatch({ type: POST.SET, payload });
// }

export const setPost = (payload: string): any => (dispatch: ThunkDispatch<any, any, IAction>) => {
  dispatch({ type: POST.SET, payload })
}

export const addPost = createAction<POST.ADD, IPost>(POST.ADD);

const actions = {
  setPost,
  addPost
};

export type IAction = IActionUnion<typeof actions>;