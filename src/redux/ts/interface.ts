export interface IPost {
  id: number;
  post: string;
};

export interface IState {
  title: string;
  posts: IPost[];
}

// Crud //
export interface IListProps {
  title: string,
  posts: IPost[]
}

export interface IListSelector {
  title: string,
  posts: IPost[]
}