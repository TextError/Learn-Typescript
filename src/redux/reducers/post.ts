import { POST } from '../actions/types';

const INITIAL_STATE = {
  posts: []
};


const post = (state = INITIAL_STATE, action:any) => {
  const { payload } = action;
  switch (action.type) {
    case POST.SET:
      return { ...state, posts: [ ...state.posts, payload ] }
    default:
      return state;
  }
};

export default post;