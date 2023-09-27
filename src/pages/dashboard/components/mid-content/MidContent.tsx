import React from "react";
import { MidContentWrapper } from "./midContent-style";
import { Categories } from "../categories/Categories";
import { Props } from "../content-page/ContentPage";
import { Card } from "../../../../components/card/card";
export const MidContent: React.FC<Props> = ({ articles }) => {
  return (
    <MidContentWrapper>
      <Categories />
      <section className="articles-container">
        {articles &&
          articles.map((article) => {
            return <Card article={article} key={article.id} id={article.id} />;
          })}
      </section>
    </MidContentWrapper>
  );
};
