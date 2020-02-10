import { POST } from '../../actions/types';
import { IPost } from '../interface';

export interface ISetItem {
  type: typeof POST.SET;
  payload: string
}

export interface IAddItem {
  type: typeof POST.ADD;
  payload: IPost
};

export type ICrudActionTypes= ISetItem | IAddItem;