import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../../../../App";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { ActionButtonsWrapper } from "./actionButtons-style";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
export const ActionButtons = () => {
  const { user, setUser, isDarkTheme, setIsDarkTheme } =
    useContext(globalContext);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const navigate = useNavigate();

  ///removes credentials from web
  const logOut = async () => {
    try {
      await fetch("https://api.shipap.co.il/logout", {
        credentials: "include",
      });
      setUser(null);
      localStorage.removeItem("token");
    } catch (err) {
      console.log(err);
    }
  };

  const handleThemeMode = () => {
    const current = localStorage.getItem("theme");
    if (current === "dark") {
      setIsDarkTheme(false);
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkTheme(true);
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ActionButtonsWrapper $dropdown={dropdown}>
      {user?.business && (
        <>
          <div className="write-wrapper" onClick={() => navigate("/create")}>
            <FiEdit className="icon" />
            <p>Write</p>
          </div>
        </>
      )}
      <div>
        {isDarkTheme ? (
          <MdOutlineDarkMode className="dark" onClick={() => handleThemeMode()} />
        ) : (
          <MdLightMode className="light" onClick={() => handleThemeMode()} />
        )}
      </div>
      <div className="profile-pic">
        <CgProfile className="pic" onClick={() => setDropdown(!dropdown)} />
        <div className="dropdown">
          <p onClick={logOut}>Logout</p>
          <p onClick={() => navigate("/user/profile")}>Profile</p>
        </div>
      </div>
    </ActionButtonsWrapper>
  );
};
