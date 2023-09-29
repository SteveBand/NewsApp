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
import { CiSearch } from "react-icons/ci";
import { ArticleListType, User } from "../../utils/globalTypes";
import { Searchbar } from "./components/searchbar/Searchbar";
import { Link } from "react-router-dom";
import { ActionButtons } from "./components/action-buttons/ActionButtons";
import { Navigation } from "./components/navigation/Navigation";

export const Header: React.FC<Props> = ({ articles, clients, setModal }) => {
  const { user } = useContext(globalContext);
  const [searchParams, setSearchParams] = useState("");
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
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
    <HeaderWrapper className="navbar">
      <Navigation />
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
