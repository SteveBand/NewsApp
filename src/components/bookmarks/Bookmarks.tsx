import React, { useEffect, useState } from "react";
import { BookmarksWrapper } from "./utils/bookmarks-style";
import { Header } from "../dashboard/header/Header";
import { ArticleListType, ListType } from "../../utils/globalTypes";
import { Link } from "react-router-dom";
import { IoIosReturnRight } from "react-icons/io";
export const Bookmarks = () => {
  const [bookmarksList, setBookmarksList] = useState<ArticleListType>();
  useEffect(() => {
    const storage = localStorage.getItem("bookmarks");
    if (storage) {
      const parsedStorage = JSON.parse(storage);
      setBookmarksList(parsedStorage);
    }
  }, []);

  const handleRemove = (id: number) => {
    const storage = localStorage.getItem("bookmarks");
    const parsedStorage = storage && JSON.parse(storage);
    const newArr = parsedStorage.filter((obj: ListType) => {
      return obj.id !== id;
    });
    setBookmarksList(newArr);
    localStorage.removeItem("bookmarks");
    localStorage.setItem("bookmarks", JSON.stringify(newArr));
  };
  return (
    <>
      <Header />
      <BookmarksWrapper>
        <article className="container">
          <h1>Bookmarks</h1>
          {bookmarksList?.map((article) => {
            return (
              <div className="article-card" key={article.id}>
                <Link to={`/article/${article.id}`} className="link-container">
                  <div
                    className="img-container"
                    style={{ backgroundImage: `url(${article.imgUrl})` }}
                  ></div>
                  <div className="headline">{article.headline}</div>
                </Link>
                <div className="buttons">
                  <p onClick={() => handleRemove(article.id)}>Remove</p>
                </div>
              </div>
            );
          })}

          <Link to={"/"} className="back-btn">
            Back
          </Link>
        </article>
      </BookmarksWrapper>
    </>
  );
};
