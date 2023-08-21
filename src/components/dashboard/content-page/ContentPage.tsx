import { Dispatch } from "react";
import { ContetPageWrapper } from "../../../styles/contentPage-style";
import { NavBar } from "../navbar/Navbar";
import { MidContent } from "./mid-content/MidContent";
import { Trending } from "./trending/Trending";
import { ArticleListType } from "../../../utils/globalTypes";
import { SpinnerLoader } from "../../loaders/SpinnerLoader";
export const ContentPage: React.FC<Props> = ({ articles, setArticles }) => {
  return (
    <ContetPageWrapper>
      <NavBar />
      {articles?.length ? (
        <>
          <MidContent articles={articles} setArticles={setArticles} />
          <Trending articles={articles} setArticles={setArticles} />
        </>
      ) : (
        <SpinnerLoader />
      )}
    </ContetPageWrapper>
  );
};

export interface Props {
  articles: ArticleListType | undefined;
  setArticles: Dispatch<React.SetStateAction<ArticleListType>>;
}
