import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArticlePage } from "../../../styles/article-style";
import { token } from "../../../App";
import { IoIosReturnRight } from "react-icons/io";
import moment from "moment";
export const Article = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState<ArticleType>();
  let addedTime = moment(articleData?.addedTime).format("LLL");
  let publishedTime = moment(articleData?.publishDate).format("LLL");
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      try {
        fetch(`https://api.shipap.co.il/articles/${id}?token=${token}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => setArticleData(data));
      } catch (err) {
        console.log(err);
      }
    }
  }, [id]);
  return (
    <ArticlePage>
      {articleData && (
        <article className="article-wrapper" key={articleData.id}>
          <div className="title-container">
            <h1>{articleData.headline}</h1>
            <IoIosReturnRight className="icon" onClick={() => navigate("/")} />
          </div>
          <header>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${articleData.imgUrl})` }}
            ></div>
            <p>{articleData.content}</p>
          </header>
          <br />
          <footer>
            <p>Added Time: {addedTime}</p>
            <p>Published Time: {publishedTime}</p>
          </footer>
        </article>
      )}
    </ArticlePage>
  );
};

interface ArticleType {
  addedTime: string;
  id: number;
  content: string;
  description: string;
  headline: string;
  imgUrl: string;
  publishDate: string;
}
