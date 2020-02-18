import { POST, IAction } from "../actions/types";
import { IAppState } from "../ts/interface";


const initState: IAppState = {
  title: '',
  posts: []
};

const post = (state: IAppState = initState, action: IAction ): IAppState => {
  switch (action.type) {
    case POST.SET:
      return { ...state, title: action.payload };
    case POST.ADD:
      return { ...state, posts: [...state.posts, action.payload] };
    case POST.DELETE:
      return { ...state, posts: [...state.posts.filter(el => el.id !== action.payload)]}
    default:
      return state;
  }
};

export default post