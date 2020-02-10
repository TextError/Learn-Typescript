import { createSelector } from 'reselect';
import { IAppState } from '../ts/interface';

const select_title_state = (state: IAppState) => state.title;
const select_posts_state = (state: IAppState) => state.posts;

export const state_title = createSelector(
  [select_title_state],
  state => state
);

export const state_posts = createSelector(
  [select_posts_state],
  state => state
);