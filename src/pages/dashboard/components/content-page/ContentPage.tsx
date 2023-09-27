import { Dispatch } from "react";
import { ContetPageWrapper } from "./contentPage-style";
import { MidContent } from "../mid-content/MidContent";
import { ArticleListType } from "../../../../utils/globalTypes";
import { SpinnerLoader } from "../../../../components/loaders/spinner/SpinnerLoader";
export const ContentPage: React.FC<Props> = ({ articles, setArticles }) => {
  return (
    <ContetPageWrapper>
      {articles?.length ? (
        <>
          <MidContent articles={articles} setArticles={setArticles} />
        </>
      ) : (
        <SpinnerLoader />
      )}
    </ContetPageWrapper>
  );
};

export interface Props {
  articles?: ArticleListType | undefined;
  setArticles?: Dispatch<React.SetStateAction<ArticleListType>>;
}
