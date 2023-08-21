import { TrendingWrapper } from "../../../../styles/trending-style";
import { IoOptionsOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { Props } from "../ContentPage";
import moment from "moment";
import { Link } from "react-router-dom";
export const Trending: React.FC<Props> = ({ articles, setArticles }) => {
  return (
    <TrendingWrapper>
      <article className="container">
        <div className="title">
          <p>WEEKLY TRENDING</p>
          <div className="buttons-container">
            <IoOptionsOutline className="icon" />
            <SlOptions className="icon" />
          </div>
        </div>
        <article className="articles-container">
          {articles?.map((article, i) => {
            const time = moment(article.addedTime).format("MMM D");
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
                  <p>{article.headline}</p>
                  <br />
                  <footer>
                    <p>{time}</p>
                    <SlOptions className="icon" />
                  </footer>
                </div>
              </Link>
            );
          })}
        </article>
      </article>
    </TrendingWrapper>
  );
};
