import React from "react";
import { MidContentWrapper } from "../../../../styles/contentPage-style";
import { Categories } from "../Categories";
import { Props } from "../ContentPage";
import { Card } from "./card";
export const MidContent: React.FC<Props> = ({ articles, setArticles }) => {
  return (
    <MidContentWrapper>
      <Categories />
      <section className="articles-container">
        {articles &&
          articles.map((article) => {
            return (
              <Card
                article={article}
                key={article.id}
                articlesList={articles}
                setArticlesList={setArticles}
                id={article.id}
              />
            );
          })}
      </section>
    </MidContentWrapper>
  );
};
