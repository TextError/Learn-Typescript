import { POST } from '../actions/types';
import { IAppState } from '../ts/interface';
import { IAction } from '../actions/crud';

const INITIAL_STATE: IAppState = {
  title: '',
  posts: []
};


const post = (state: IAppState = INITIAL_STATE, action: IAction): IAppState => {
  const { payload } = action;
  switch (action.type) {
    case POST.SET:
      return { ...state, title: payload };
    default:
      return state;
  }
};

export default post;