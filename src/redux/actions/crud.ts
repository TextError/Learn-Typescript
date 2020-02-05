import { POST } from './types';

export const setItem = (title: string) => ({ type: POST.SET, payload: title });
// export const setItem = (item: IPost) => (dispatch: any) => dispatch({ type: POST.SET, payload: item });