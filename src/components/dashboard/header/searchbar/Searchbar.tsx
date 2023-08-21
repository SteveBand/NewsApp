import React, { Dispatch, useEffect, useState } from "react";
import { SearchbarWrapper } from "./utils/searchbar-style";
import { ArticleListType, ListType } from "../../../../utils/globalTypes";
import { Link } from "react-router-dom";
import { LoadingDots } from "../../../../utils/loading-dots/LoadingDots";

export const Searchbar: React.FC<Props> = ({
  articles,
  searchParams,
  isActive,
}) => {
  const [searchList, setSearchList] = useState<ArticleListType>([]);
  const separators = [
    " ",
    "\\+",
    "-",
    "\\(",
    "\\)",
    ",",
    "\\*",
    "/",
    ":",
    "\\?",
  ];
  const handleSearch = () => {
    const idArr = searchList?.map((elem) => elem.id);
    setSearchList([]);

    articles?.forEach((article) => {
      if (!idArr.includes(article.id)) {
        const valuesArr = Object.values(article);
        const words = valuesArr
          .join()
          .toLowerCase()
          .split(new RegExp(separators.join("|"), "g"));
        if (
          words.includes(searchParams.toLowerCase()) &&
          searchParams.length >= 2
        ) {
          setSearchList((prev) => [...prev, article]);
        } else if (searchParams.length < 1) {
          setSearchList([]);
        }
      }
    });
  };

  useEffect(() => {
    handleSearch();
  }, [searchParams]);
  return (
    <SearchbarWrapper $isactive={isActive}>
      {searchList.length > 0 ? (
        searchList?.map((article: ListType) => {
          return (
            <Link
              className="article-wrapper"
              key={article.id}
              to={`/article/${article.id}`}
            >
              <p>{article.headline}</p>
            </Link>
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
}
