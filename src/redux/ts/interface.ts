export interface IState {
  crud: {
    title: string;
    posts: [];
  }
}

export interface IListTile {
  title: string;
};

export interface IPost {
  id: number;
  post: string;
};