import { useContext, useState } from "react";
import { NavigationWrapper } from "./navigation-style";
import { useLocation, useNavigate } from "react-router-dom";
import { globalContext } from "../../../../App";
import { Menu } from "../menu/Menu";
import { BsList } from "react-icons/bs";
export const Navigation = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const { user } = useContext(globalContext);

  ///get Path from URL query
  const path = useLocation().pathname;

  const paths = {
    myArticles: "/user/articles",
    home: "/",
    favorite: "/user/favorites",
    clients: "/admin/clients",
    discover: "/discover",
  };
  return (
    <NavigationWrapper>
      <ul>
        <li
          className={path === paths.home ? "active" : ""}
          onClick={() => navigate(paths.home)}
        >
          Home
        </li>
        {user?.email && (
          <li
            className={path === paths.favorite ? "active" : ""}
            onClick={() => navigate(paths.favorite)}
          >
            Favorites
          </li>
        )}
        <li
          className={path === paths.discover ? "active" : ""}
          onClick={() => navigate(paths.discover)}
        >
          Discover
        </li>
        {user?.business || user?.admin ? (
          <li
            className={path === paths.myArticles ? "active" : ""}
            onClick={() => navigate(paths.myArticles)}
          >
            My Articles
          </li>
        ) : null}
        {user?.admin && (
          <li
            className={path === paths.clients ? "active" : ""}
            onClick={() => navigate(paths.clients)}
          >
            Clients
          </li>
        )}
      </ul>
      <BsList className="icon" onClick={() => setMenu(!menu)} />
      <Menu isMenu={menu} setMenu={setMenu} />
    </NavigationWrapper>
  );
};
