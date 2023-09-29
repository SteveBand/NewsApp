import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminSignup } from "./pages/auth-page/admin/AdminSignup";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Article } from "./pages/article/article";
import { CreateArticle } from "./pages/create-article/CreateArticle";
import { EditArticle } from "./pages/edit-article/EditArticle";
import { ArticleListType, Context, User } from "./utils/globalTypes";
import { Favourites } from "./pages/Favorites/Favorites";
import { ClientSignUp } from "./pages/auth-page/client/signup-page/ClientSignUp";
import { ClientLogin } from "./pages/auth-page/client/login-page/ClientLogin";
import { UserArticles } from "./pages/user-articles/UserArticles";
import { Clients } from "./pages/clients/Clients";
import { DiscoverPage } from "./pages/discover-page/DiscoverPage";
import { UserProfile } from "./pages/user-profile/UserProfile";
import { UserEdit } from "./pages/user-edit/UserEdit";
import { SnackBar } from "./components/snackbar/Snackbar";
import { GlobalStyles, darkTheme, lightTheme } from "./utils/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ErrorPage } from "./pages/error-page/ErrorPage";

export const token = "d29875fa-3431-11ee-b3e9-14dda9d4a5f0";

export const globalContext = React.createContext<Context>({} as Context);

function App() {
  const [user, setUser] = useState<User>({});
  const userToken = localStorage.getItem("token");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [allArticles, setAllArticles] = useState<ArticleListType>([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "welcome nigger",
  });

  const handleSnackbar = (message: string) => {
    new Promise((resolve) => {
      setSnackbar({ open: true, message });
      resolve(
        setTimeout(() => {
          setSnackbar({ open: false, message: "" });
        }, 3000)
      );
    });
  };

  const login = async () => {
    try {
      const response = await fetch(
        `https://api.shipap.co.il/clients/login?token=${token}`,
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      setUser(data);
      handleSnackbar(
        `Welcome ${data.firstName || data.fullName} ${data.lastName || ""}`
      );
    } catch (err) {
      localStorage.removeItem("token");
      throw err;
    }
  };

  const getAllArticles = async () => {
    try {
      const response = await fetch(
        `https://api.shipap.co.il/cards?token=${token}`,
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      data && setAllArticles(data);
    } catch (err) {
      throw err;
    }
  };

  const themeContorl = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      theme === "light" ? setIsDarkTheme(false) : setIsDarkTheme(true);
    }
  };

  useEffect(() => {
    if (userToken) {
      login();
    }
    themeContorl();
    getAllArticles();
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles $isDarkTheme={isDarkTheme} />
        <SnackBar snackbar={snackbar} />
        <globalContext.Provider
          value={{
            user,
            setUser,
            allArticles,
            setAllArticles,
            setSnackbar,
            snackbar,
            handleSnackbar,
            isDarkTheme,
            setIsDarkTheme,
          }}
        >
          <Routes>
            <Route element={<Dashboard />} path="/"></Route>
            <Route element={<DiscoverPage />} path="/discover" />
            <Route element={<UserArticles />} path="/user/articles" />
            <Route element={<UserProfile />} path="/user/profile" />
            <Route element={<CreateArticle />} path="/create"></Route>
            <Route element={<EditArticle />} path="/edit/:id"></Route>
            <Route element={<Favourites />} path="/user/favorites"></Route>
            <Route element={<Article />} path="/article/:id" />
            <Route element={<Clients />} path="/admin/clients" />
            <Route element={<ClientSignUp />} path="/client/signup" />
            <Route element={<ClientLogin />} path="/client/login" />
            <Route element={<AdminSignup />} path="/admin/signup" />
            <Route element={<UserEdit />} path="/user/edit" />
            <Route element={<UserEdit />} path="/user/edit/:id" />
            <Route element={<ErrorPage />} path="*" />
          </Routes>
        </globalContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
