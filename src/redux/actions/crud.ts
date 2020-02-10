import { POST } from "./types";
import { createAction, IActionUnion } from "./utils";

export const setPost = createAction<POST.SET, string>(POST.SET);



const actions = {
  setPost
};

export type IAction = IActionUnion<typeof actions>;