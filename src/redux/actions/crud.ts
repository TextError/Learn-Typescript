import { POST } from './types';
import { IPost } from '../ts/interface';

// export const setItem = (item: IPost) => (dispatch: any) => dispatch({ type: POST.SET, payload: item });
export const setItem = (title: string) => ({ type: POST.SET, payload: title });

export const addItem = (post: IPost) => ({ type: POST.ADD, payload: post });