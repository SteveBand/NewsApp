import { useContext, useEffect, useState } from "react";
import { DiscoverPageWrapper } from "./discoverPage-style";
import { globalContext } from "../../App";
import { Card } from "../../components/card/card";
import { useNavigate } from "react-router-dom";
import { ArticleListType } from "../../utils/globalTypes";
import { LoadingDots } from "../../components/loaders/loading-dots/LoadingDots";

export const DiscoverPage = () => {
  const { allArticles, setAllArticles } = useContext(globalContext);
  const [searchList, setSearchList] = useState<ArticleListType>([]);
  const [searchParams, setSearchParams] = useState("");
  const navigate = useNavigate();

  ///gets all articles data from global state and filters articles by the value we put in
  const handleSearch = () => {
    const fields = allArticles.filter((article) => {
      return (
        article.title.toLowerCase().includes(searchParams.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchParams.toLowerCase())
      );
    });

    ///if searchParams has length then set the state with the articles and stop the function
    if (searchParams.length) {
      return setSearchList(fields);
    }

    ///return empty arr to state to clean articles
    setSearchList([]);
  };
  ///useEffect to activate the function everytime searchParams state changes
  useEffect(() => {
    handleSearch();
  }, [searchParams]);
  return (
    <DiscoverPageWrapper>
      <section className="content">
        <header className="searchbar-wrapper navbar">
          <p>Discover</p>
          <input
            type="text"
            placeholder="Search an article here"
            onChange={(e) => {
              setSearchParams(e.target.value);
            }}
          />
          <p onClick={() => navigate(-1)}>Back</p>
        </header>
        {!searchList.length ? (
          <article className="loading-container">
            <LoadingDots isActive={true} />
          </article>
        ) : (
          <>
            <article className="cards-container">
              {searchList.map((article) => {
                return (
                  <Card
                    article={article}
                    setArticles={setAllArticles}
                    key={article.id}
                  />
                );
              })}
            </article>
          </>
        )}
      </section>
    </DiscoverPageWrapper>
  );
};
