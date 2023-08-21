import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../../App";
import { Context } from "../../../../utils/globalTypes";
import { SlOptions } from "react-icons/sl";
import moment from "moment";
import { CardWrapper } from "../../../../styles/articleCard-style";
import { Link } from "react-router-dom";

export const Card: React.FC<any> = ({
  article,
  setArticlesList,
  articlesList,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const { user, setEditId, editId } = useContext(userContext) as Context;
  const time = moment(article.addedTime).format("MMM D");
  const navigate = useNavigate();

  const deleteCard = () => {
    fetch(`https://api.shipap.co.il/articles/${article.id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    const newList = articlesList.filter((item: ListType) => {
      return item.id !== article.id;
    });

    setArticlesList(newList);
  };

  const handleBookmark = () => {
    const oldArr = localStorage.getItem("bookmarks");
    if (oldArr) {
      const parsedArr = JSON.parse(oldArr);
      const idsArr = parsedArr.map((element: ListType) => element.id);
      if (!idsArr.includes(article.id)) {
        const newArr = [...parsedArr, article];
        localStorage.removeItem("bookmarks");
        localStorage.setItem("bookmarks", JSON.stringify(newArr));
      } else {
        console.log("already exists ");
      }
    } else {
      localStorage.setItem("bookmarks", JSON.stringify([article]));
    }
    setDropdown(false);
  };

  return (
    <CardWrapper dropdown={dropdown.toString()} img={article.imgUrl}>
      <article className="article-wrapper" id={article.id.toString()}>
        <div
          className="img-container"
          style={{ backgroundImage: `url(${article.imgUrl})` }}
        ></div>
        <p>{article.headline}</p>
        <Link to={`/article/${article.id}`} className="link">
          To see more
        </Link>
        <footer>
          {time}
          <div className="options">
            <SlOptions
              className="icon"
              onClick={() => setDropdown(!dropdown)}
            />
            <div className="dropdown">
              <ul>
                <li onClick={() => handleBookmark()}>Bookmark It</li>
                {user && (
                  <>
                    <li onClick={() => navigate(`/edit/${article.id}`)}>
                      Edit
                    </li>
                    <li onClick={deleteCard}>Delete</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </footer>
      </article>
    </CardWrapper>
  );
};

type ListType = {
  addedTime: string;
  description: string;
  headline: string;
  id: number;
  publishDate: string;
  imgUrl?: string | undefined;
  views: 0;
};
