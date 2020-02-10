import { POST } from '../actions/types';
import { ICrudActionTypes } from '../ts/actions/crud';

const INITIAL_STATE = {
  title: '',
  posts: []
};


const post = (state:any = INITIAL_STATE, action: ICrudActionTypes) => {
  const { payload } = action;
  switch (action.type) {
    case POST.SET:
      return { ...state, title: payload };
    case POST.ADD:
      return { ...state, posts: [...state.posts, payload] }
    default:
      return state;
  }
};

export default post;