import { Link } from "react-router-dom";
import { NavWrapper } from "../../../styles/navbar-style";
import { HiHome } from "react-icons/hi";
import { CiCompass1 } from "react-icons/ci";
import { BsBookmarkDash } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";
export const NavBar = () => {
  return (
    <NavWrapper>
      <Link to="/" className="link">
        <HiHome className="icon" />
        <p>HOME</p>
      </Link>
      <Link to="/" className="link">
        <CiCompass1 className="icon" />
        <p>DISCOVER</p>
      </Link>
      <Link to="/bookmarks" className="link">
        <BsBookmarkDash className="icon" />
        <p>BOOKMARK</p>
      </Link>
      <Link to="/" className="link">
        <RiSettingsLine className="icon" />
        <p>SETTINGS</p>
      </Link>
    </NavWrapper>
  );
};
