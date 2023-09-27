import { TrendingWrapper } from "./trending-style";
import { Props } from "../content-page/ContentPage";
import { Link } from "react-router-dom";
export const Trending: React.FC<Props> = ({ articles }) => {
  return (
    <TrendingWrapper className="trending-wrapper">
      <article className="container">
        <div className="title">
          <p>WEEKLY TRENDING</p>
        </div>
        <article className="articles-container">
          {articles?.map((article) => {
            return (
              <Link
                to={`/article/${article.id}`}
                className="article-wrapper"
                key={article.id}
              >
                <div
                  className="img-container"
                  style={{ backgroundImage: `url(${article.imgUrl})` }}
                ></div>
                <div className="content">
                  <br />
                  <p>{article.title}</p>
                  <br />
                </div>
              </Link>
            );
          })}
        </article>
      </article>
    </TrendingWrapper>
  );
};
