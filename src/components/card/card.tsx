import React, { useState, useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { globalContext } from "../../App";
import { Context } from "../../utils/globalTypes";
import { SlOptions } from "react-icons/sl";
import { CardWrapper } from "./card-style";
import { Link } from "react-router-dom";
import { ArticleType } from "../../utils/globalTypes";
import { token } from "../../App";
import { AiFillHeart } from "react-icons/ai";
export const Card: React.FC<any> = ({
  article,
  setFavouriteList,
  favouriteList,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const { user, setAllArticles, allArticles } = useContext(
    globalContext
  ) as Context;
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const path = useLocation().pathname;

  ///Function that allows admin to delete every article from database
  const adminDelete = () => {
    if (user?.admin) {
      fetch(
        `https://api.shipap.co.il/admin/cards/${article.id}?token=${token}`,
        {
          credentials: "include",
          method: "DELETE",
        }
      );
      ///creating new list without the article and updating state for fast render
      const newList = allArticles.filter((item: ArticleType) => {
        return item.id !== article.id;
      });

      setAllArticles(newList);
    }
  };


  ///Function that allows Business user delete his own articles
  const businessDelete = () => {
    if (user?.business && user.id === article.clientId) {
      fetch(
        `https://api.shipap.co.il/business/cards/${article.id}?token=${token}`,
        {
          credentials: "include",
          method: "DELETE",
        }
      );
      ///creating new list without the article and updating state for fast render
      const newList = allArticles.filter((item: ArticleType) => {
        return item.id !== article.id;
      });

      setAllArticles(newList);
    }
  };

  ///function to let a user favorite an article
  const handleFavourite = () => {
    try {
      fetch(
        `https://api.shipap.co.il/cards/${article.id}/favorite?token=${token}`,
        {
          credentials: "include",
          method: "PUT",
        }
      );

      ///updating a state for a faster update/render
      article.favorite = true;
      setIsLiked(!isLiked);
      console.log(article.favorite);
    } catch (err) {
      throw err;
    }
  };

  ///function to unFavorite an article

  const handleUnFavorite = () => {
    try {
      fetch(
        `https://api.shipap.co.il/cards/${article.id}/unfavorite?token=${token}`,
        {
          method: "PUT",
          credentials: "include",
        }
      );
      ///updating a state for a faster update/render
      article.favorite = false;
      setIsLiked(!isLiked);
      if (path === "/user/favorites") {
        ///new FavoritList to push and update the favorite list state for faster render
        const updatedFavoriteList = favouriteList.filter(
          (c: ArticleType) => c.id !== article.id
        );
        setFavouriteList(updatedFavoriteList);
      }
      ///new AllArticles List to push and update the Articles list state for faster render
      const updatedAllList = allArticles.map((c) => {
        if (c.id === article.id) {
          c.favorite = false;
        }
        return c;
      });
      setAllArticles(updatedAllList);
    } catch (err) {
      throw err;
    }
  };

  return (
    <CardWrapper
      $dropdown={dropdown.toString()}
      $img={article.imgUrl}
      className="card-wrapper"
    >
      <article className="article-wrapper" id={article.id.toString()}>
        <div
          className="img-container"
          style={{ backgroundImage: `url(${article.imgUrl})` }}
        ></div>
        <p className="title">{article.title}</p>
        <p>{article.subtitle}</p>
        <Link to={`/article/${article.id}`} className="link">
          To see more
        </Link>
        {user && (
          <footer>
            <div className="options">
              <SlOptions
                className="icon"
                onClick={() => setDropdown(!dropdown)}
              />
              <div className="dropdown">
                <ul>
                  {user.business ? (
                    <li onClick={() => navigate(`/edit/${article.id}`)}>
                      Edit
                    </li>
                  ) : (
                    ""
                  )}
                  {user.business && user.id === article.clientId && (
                    <li onClick={businessDelete}>Delete</li>
                  )}
                  {user.admin && <li onClick={adminDelete}>Delete</li>}
                </ul>
              </div>
              {user.email && (
                <AiFillHeart
                  className={`${
                    article.favorite ? "icon heart active" : "icon heart"
                  }`}
                  onClick={() =>
                    article.favorite !== true
                      ? handleFavourite()
                      : handleUnFavorite()
                  }
                />
              )}
            </div>
          </footer>
        )}
      </article>
    </CardWrapper>
  );
};
