import React, { useState, useEffect, useContext } from "react";
import { Header } from "./header/Header";
import { ContentPage } from "./content-page/ContentPage";
import { DashboardWrapper } from "../../styles/dashboard-style";
import { token } from "../../App";
import { ArticleListType } from "../../utils/globalTypes";
import { userContext } from "../../App";

export const Dashboard = () => {
  const [articles, setArticles] = useState<ArticleListType>([]);
  const { user } = useContext(userContext);
  const getArticles = async () => {
    try {
      const response = await fetch(
        `https://api.shipap.co.il/articles?token=${token}`
      );
      const data = await response.json();
      data && setArticles(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArticles();
  }, [user]);
  return (
    <DashboardWrapper>
      <Header articles={articles} setArticles={setArticles} />
      <ContentPage articles={articles} setArticles={setArticles} />
    </DashboardWrapper>
  );
};
