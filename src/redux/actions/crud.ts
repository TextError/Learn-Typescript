import { POST } from './types';
import { IPost } from '../ts/interface';
import { ICrudActionTypes } from '../ts/actions/crud';


export const setItem = (title: string): ICrudActionTypes => ({ type: POST.SET, payload: title });

export const addItem = (post: IPost): ICrudActionTypes => ({ type: POST.ADD, payload: post });