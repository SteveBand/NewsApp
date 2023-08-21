import { HeaderWrapper } from "../../../styles/header-style";
import {
  useContext,
  useState,
  Dispatch,
  ChangeEvent,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import { userContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { BsList, BsFillCaretDownFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { ArticleListType } from "../../../utils/globalTypes";
import { Searchbar } from "./searchbar/Searchbar";

export const Header: React.FC<Props> = ({ articles, setArticles }) => {
  const { user, setUser } = useContext(userContext);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState("");
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await fetch("https://api.shipap.co.il/logout", {
        credentials: "include",
      });
      setUser(undefined);
    } catch (err) {
      console.log(err);
    }
  };

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

  const handleSearchParams = (ev: ChangeEvent) => {
    const target = ev.target as HTMLInputElement;
    setSearchParams(target.value);
  };

  return (
    <HeaderWrapper dropdown={dropdown.toString()}>
      <article className="title">
        <BsList className="icon" />
        <p>WOCO.KI</p>
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
        />
      </article>
      {user ? (
        <article className="actions">
          <div className="write-wrapper" onClick={() => navigate("/create")}>
            <FiEdit className="icon" />
            <p>Write</p>
          </div>
          <div className="notifications">
            <IoIosNotificationsOutline className="icon" />
          </div>
          <div className="profile-pic">
            <CgProfile className="pic" />
            <BsFillCaretDownFill
              className="arrow"
              onClick={() => setDropdown(!dropdown)}
            />
            <div className="dropdown" onClick={logOut}>
              <p>Logout</p>
            </div>
          </div>
        </article>
      ) : (
        <div></div>
      )}
    </HeaderWrapper>
  );
};

export interface Props {
  articles?: ArticleListType | undefined;
  setArticles?: Dispatch<React.SetStateAction<ArticleListType>>;
}
