import { POST } from './types';
import { IPost } from '../ts/interface';

// export const setItem = (item: IPost) => ({ type: POST.ADD, payload: item });
export const setItem = (item: IPost) => (dispatch: any) => dispatch({ type: POST.SET, payload: item });