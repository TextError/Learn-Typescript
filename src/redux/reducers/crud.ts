import { POST } from '../actions/types';

const INITIAL_STATE = {
  title: '',
  posts: []
};


const post = (state: any = INITIAL_STATE, action:any) => {
  const { payload } = action;
  switch (action.type) {
    case POST.SET:
      return { ...state, title: payload }
    default:
      return state;
  }
};

export default post;