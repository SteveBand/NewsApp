export type ArticleListType = {
  id: number;
  createdTime?: string;
  title: string;
  description: string;
  subtitle: string;
  phone: string;
  email: string;
  web: string;
  imgUrl: string;
  imgAlt: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  zip: string;
  clientId?: string;
  favorite?: boolean;
}[];

export interface Context {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  allArticles: ArticleListType;
  setAllArticles: React.Dispatch<React.SetStateAction<ArticleListType>>;
  setSnackbar: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      message: string;
    }>
  >;
  snackbar: {
    open: boolean;
    message: string;
  };
  handleSnackbar: (message: string) => void;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkTheme: boolean;
}

export type ArticleType = {
  id: number;
  createdTime?: string;
  title: string;
  description: string;
  subtitle: string;
  phone: string;
  email: string;
  web: string;
  imgUrl: string;
  imgAlt: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  zip: string;
  ClientId?: string;
};

export type User = {
  id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  imgUrl?: string;
  imgAlt?: string;
  state?: string;
  country?: string;
  city?: string;
  street?: string;
  houseNumber?: string;
  zip?: string;
  business?: boolean;
  admin?: boolean;
  token?: string;
};
