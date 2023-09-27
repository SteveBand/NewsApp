import { HeaderWrapper } from "./header-style";
import {
  useContext,
  useState,
  Dispatch,
  ChangeEvent,
  useEffect,
  useRef,
} from "react";
import { globalContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { ArticleListType, User } from "../../utils/globalTypes";
import { Searchbar } from "./components/searchbar/Searchbar";
import { Link } from "react-router-dom";
import { ActionButtons } from "./components/action-buttons/ActionButtons";
import { Menu } from "./components/menu/Menu";

export const Header: React.FC<Props> = ({ articles, clients, setModal }) => {
  const { user } = useContext(globalContext);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [menu, setMenu] = useState(false);
  const [searchParams, setSearchParams] = useState("");
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const paths = {
    myArticles: "/user/articles",
    home: "/",
    favorite: "/user/favorites",
    clients: "/admin/clients",
    discover: "/discover",
  };
  ///gets Path location from URl
  const path = useLocation().pathname;

  ///checks if clicked outside dropdown window is closed if inside is not closed
  useEffect(() => {
    const handleClick = (ev: any) => {
      if (searchRef.current && !searchRef.current.contains(ev.target)) {
        setIsActive(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [searchRef]);
  ///gets searchParams from input and Update state
  const handleSearchParams = (ev: ChangeEvent) => {
    const target = ev.target as HTMLInputElement;
    setSearchParams(target.value);
  };

  return (
    <HeaderWrapper $dropdown={dropdown.toString()} className="navbar">
      <article className="title">
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
          {user?.business && (
            <li
              className={path === paths.myArticles ? "active" : ""}
              onClick={() => navigate(paths.myArticles)}
            >
              My Articles
            </li>
          )}
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
      </article>
      <article className="searchbar-wrapper" ref={searchRef}>
        <input
          type="text"
          placeholder="Search anything here"
          onChange={handleSearchParams}
          onClick={() => setIsActive(true)}
        />
        <CiSearch className="icon" />
        <Searchbar
          articles={articles}
          searchParams={searchParams}
          isActive={isActive}
          setIsActive={setIsActive}
          clients={clients}
          setModal={setModal}
        />
      </article>
      {user?.email ? (
        <ActionButtons />
      ) : (
        <Link className="login-btn" to={"/client/login"}>
          Login
        </Link>
      )}
    </HeaderWrapper>
  );
};

export interface Props {
  articles?: ArticleListType;
  setArticles?: Dispatch<React.SetStateAction<ArticleListType>>;
  clients?: User[];
  setModal?: Dispatch<React.SetStateAction<User>>;
}
