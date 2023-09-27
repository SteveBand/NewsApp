import React, { useEffect, useState, useContext } from "react";
import { FavouritesPage, FavouritesWrapper } from "./utils/favourites-style";
import { Header } from "../../components/header/Header";
import { ArticleListType } from "../../utils/globalTypes";
import { token, globalContext } from "../../App";
import { SpinnerLoader } from "../../components/loaders/spinner/SpinnerLoader";
import { Card } from "../../components/card/card";
export const Favourites = () => {
  const [favouriteList, setFavouriteList] = useState<ArticleListType>();
  const { user } = useContext(globalContext);

  ///useEffect Fetches user favorite articles everytime a user is changed
  useEffect(() => {
    if (user) {
      try {
        fetch(`https://api.shipap.co.il/cards/favorite?token=${token}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => setFavouriteList(data));
      } catch (err) {
        throw err;
      }
    }
  }, [user]);

  return (
    <>
      <Header articles={favouriteList} />
      <FavouritesPage>
        <FavouritesWrapper>
          <article className="container">
            {!favouriteList && <SpinnerLoader />}
            {favouriteList?.map((article) => {
              return (
                <Card
                  article={article}
                  setFavouriteList={setFavouriteList}
                  favouriteList={favouriteList}
                  key={article.id}
                />
              );
            })}
            {favouriteList && !favouriteList.length && <h2>No Favourites</h2>}
          </article>
        </FavouritesWrapper>
      </FavouritesPage>
    </>
  );
};
