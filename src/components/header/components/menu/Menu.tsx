import { useNavigate } from "react-router-dom";
import { MenuWrapper } from "./menu-style";
import { Dispatch, useContext, useEffect, useState } from "react";
import { globalContext } from "../../../../App";

export const Menu: React.FC<Props> = ({ isMenu, setMenu }) => {
  const navigate = useNavigate();
  const { user } = useContext(globalContext);

  useEffect(() => {
    const handleMenu = () => {
      if (window.innerWidth > 890) {
        setMenu(false);
      }
    };
    window.addEventListener("resize", handleMenu);

    return () => window.removeEventListener("resize", handleMenu);
  }, []);

  return (
    <MenuWrapper $isMenu={isMenu} className="dropdown">
      <p
        onClick={() => {
          navigate("/");
          setMenu(false);
        }}
      >
        Home
      </p>
      {user?.email && (
        <p
          onClick={() => {
            navigate("/user/favorites");
            setMenu(false);
          }}
        >
          Favorites
        </p>
      )}
      <p
        onClick={() => {
          navigate("/discover");
          setMenu(false);
        }}
      >
        Discover
      </p>
      {user?.business && (
        <p
          onClick={() => {
            navigate("/user/articles");
            setMenu(false);
          }}
        >
          My Articles
        </p>
      )}
      {user?.admin && (
        <p
          onClick={() => {
            navigate("/admin/clients");
            setMenu(false);
          }}
        >
          Clients
        </p>
      )}
      {user?.business && (
        <p
          onClick={() => {
            navigate("/create");
            setMenu(false);
          }}
        >
          Write
        </p>
      )}
    </MenuWrapper>
  );
};

interface Props {
  isMenu: boolean;
  setMenu: Dispatch<React.SetStateAction<boolean>>;
}
