import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArticlePage } from "./article-style";
import { IoIosReturnRight } from "react-icons/io";
import { token } from "../../App";
import { SpinnerLoader } from "../../components/loaders/spinner/SpinnerLoader";
export const Article = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState<ArticleType>();
  const navigate = useNavigate();

  ///useEffect that checks if Id exists in URL params, and fetches data from server accordinly
  useEffect(() => {
    if (id) {
      try {
        fetch(`https://api.shipap.co.il/cards/${id}?token=${token}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            setArticleData(data);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [id]);
  return (
    <ArticlePage className="article-page">
      <article className="article-wrapper">
        {!articleData && <SpinnerLoader />}
        {articleData && (
          <>
            <div className="title-container">
              <h1>{articleData.title}</h1>
              <IoIosReturnRight
                className="icon"
                onClick={() => navigate("/")}
              />
            </div>
            <header className="content">
              <div
                className="img-container"
                style={{ backgroundImage: `url(${articleData.imgUrl})` }}
              ></div>
              <p>{articleData.description}</p>
            </header>
            <br />
          </>
        )}
      </article>
    </ArticlePage>
  );
};

interface ArticleType {
  id: number;
  createdTime: string;
  title: string;
  description: string;
  subtitle: string;
  phone: string;
  email: string;
  web: string;
  imgUrl: string;
  imgAlt: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  zip: string;
}
