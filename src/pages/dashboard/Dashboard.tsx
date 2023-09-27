import { useContext } from "react";
import { Header } from "../../components/header/Header";
import { ContentPage } from "./components/content-page/ContentPage";
import { DashboardWrapper } from "./utils/dashboard-style";
import { globalContext } from "../../App";
import { Trending } from "./components/trending/Trending";

export const Dashboard = () => {
  const { allArticles, setAllArticles } = useContext(globalContext);

  return (
    <DashboardWrapper>
      <Header articles={allArticles} setArticles={setAllArticles} />
      <section className="container">
        <ContentPage articles={allArticles} setArticles={setAllArticles} />
        <Trending articles={allArticles} setArticles={setAllArticles} />
      </section>
    </DashboardWrapper>
  );
};
