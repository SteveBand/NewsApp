import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SearchbarWrapper } from "./utils/searchbar-style";
import {
  ArticleListType,
  ArticleType,
  User,
} from "../../../../utils/globalTypes";
import { Link } from "react-router-dom";
import { LoadingDots } from "../../../loaders/loading-dots/LoadingDots";
const str = "aba";
export const Searchbar: React.FC<Props> = ({
  articles,
  searchParams,
  isActive,
  setIsActive,
  clients,
  setModal,
}) => {
  const [searchList, setSearchList] = useState<ArticleListType>([]);
  const [clientsList, setClientsList] = useState<User[]>([]);

  const handleArticlesSearch = (arr: ArticleListType, params: string) => {
    const fields = arr.filter((c) => {
      return c.title.toLowerCase().includes(params.toLowerCase());
    });

    if (params.length) {
      return setSearchList(fields);
    }
    setSearchList([]);
  };

  const handleClientsSearch = (arr: User[], params: string) => {
    const newArr = arr.filter((c) => {
      return (
        c.firstName?.toLowerCase().includes(params.toLowerCase()) ||
        c.lastName?.toLowerCase().includes(params.toLowerCase()) ||
        c.email?.toLowerCase().includes(params.toLowerCase())
      );
    });
    if (params.length) {
      return setClientsList(newArr);
    }
    setClientsList([]);
  };

  const handleClientsModal = (id: string | undefined) => {
    const user = clients?.find((i) => {
      return i.id === id;
    });
    if (user && setModal) {
      setModal(user);
      setIsActive(false);
      setClientsList([]);
    }
  };

  useEffect(() => {
    articles && handleArticlesSearch(articles, searchParams);
    clients && handleClientsSearch(clients, searchParams);
  }, [searchParams]);
  return (
    <SearchbarWrapper $isactive={isActive} className="dropdown">
      {searchList.length > 0 ? (
        searchList?.map((article: ArticleType) => {
          return (
            <Link
              className="article-wrapper"
              key={article.id}
              to={`/article/${article.id}`}
            >
              <p>{article.title}</p>
            </Link>
          );
        })
      ) : clientsList.length > 0 ? (
        clientsList.map((client: User) => {
          return (
            <a
              className="article-wrapper"
              key={client.id}
              onClick={() => handleClientsModal(client.id)}
            >
              <p>{`${client.firstName} ${client.lastName}`}</p>
            </a>
          );
        })
      ) : (
        <LoadingDots isActive={isActive} />
      )}
    </SearchbarWrapper>
  );
};

export interface Props {
  articles: ArticleListType | undefined;
  searchParams: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  clients?: User[];
  setModal?: Dispatch<React.SetStateAction<User>>;
}
