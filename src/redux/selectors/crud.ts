import { createSelector } from 'reselect';
import { IState } from '../ts/interface';

const select_title_state = (state: IState) => state.crud.title;

export const state_title = createSelector(
  [select_title_state],
  state => state
);