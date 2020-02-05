import { createSelector } from 'reselect';
import { IState } from '../ts/interface';

const select_title_state = (state: IState) => state.crud.title;
const select_posts_state = (state: IState) => state.crud.posts;

export const state_title = createSelector(
  [select_title_state],
  state => state
);

export const state_posts = createSelector(
  [select_posts_state],
  state => state
);