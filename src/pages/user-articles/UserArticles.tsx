import { useContext, useEffect, useState } from "react";
import { UserProfileWrapper } from "./utils/userArticles-style";
import { Header } from "../../components/header/Header";
import { token, globalContext } from "../../App";
import { ArticleListType } from "../../utils/globalTypes";
import { Link } from "react-router-dom";
import { SpinnerLoader } from "../../components/loaders/spinner/SpinnerLoader";

export const UserArticles = () => {
  const { user } = useContext(globalContext);
  const [articles, setArticles] = useState<ArticleListType>();

  ///function to Fetch user made Articles from the server
  const getBusinessArticles = async () => {
    fetch(`https://api.shipap.co.il/business/cards?token=${token}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setArticles(data));
  };

  ///function send the server delete request to delete the article from the dataBase
  const handleDelete = (
    event: React.MouseEvent<HTMLElement>,
    id: string | number
  ) => {
    event.preventDefault();
    fetch(`https://api.shipap.co.il/business/cards/${id}?${token}`, {
      method: "DELETE",
      credentials: "include",
    });
    ///making new array constant to filter the deleted article and changing state for faster render update
    const newArr = articles?.filter((article) => article.id !== id);
    setArticles(newArr);
  };

  useEffect(() => {
    //check if user business is true and using the function to fetch user articles from the server
    if (user?.business) {
      getBusinessArticles();
    }
  }, [user]);
  return (
    <UserProfileWrapper>
      <>
        <Header articles={articles} />
        <section className="content-wrapper medium">
          <article className="articles-content ">
            <h1>My Articles</h1>
            {!articles && <SpinnerLoader />}
            {articles &&
              articles.map((element) => {
                return (
                  <div className="article-wrapper light" key={element.id}>
                    <Link to={`/article/${element.id}`} className="link">
                      <div
                        className="img-container"
                        style={{ backgroundImage: `url(${element.imgUrl})` }}
                      ></div>
                      <div className="title">{element.title}</div>
                    </Link>
                    <div className="buttons">
                      <button onClick={(e) => handleDelete(e, element.id)}>
                        Delete
                      </button>
                      <Link to={`/edit/${element.id}`}>Edit</Link>
                    </div>
                  </div>
                );
              })}
          </article>
        </section>
      </>
    </UserProfileWrapper>
  );
};
