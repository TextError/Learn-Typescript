export interface IAppState {
  title: string;
  posts: IPost[];
};

export interface IPost {
  id: number;
  post: string;
};

export interface IListSelector {
  title: string,
  posts: IPost[]
}