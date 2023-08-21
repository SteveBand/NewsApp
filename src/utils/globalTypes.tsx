export type ArticleListType = {
  addedTime: string;
  description: string;
  headline: string;
  content: string;
  id: number;
  publishDate: string;
  imgUrl?: string | undefined;
  views: 0;
}[];

export interface Context {
  user: {} | undefined;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  editId: number | undefined;
  setEditId: React.Dispatch<React.SetStateAction<any>>;
}

export type ListType = {
  addedTime: string;
  description: string;
  headline: string;
  id: number;
  publishDate: string;
  imgUrl?: string | undefined;
  views: 0;
};
