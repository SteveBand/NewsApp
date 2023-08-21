import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/auth-page/login-page/LoginPage";
import { SignupPage } from "./components/auth-page/signup-page/SignupPage";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Article } from "./components/dashboard/content-page/article";
import { CreateArticle } from "./components/new-article/create-article/CreateArticle";
import { EditArticle } from "./components/new-article/edit-article/EditArticle";
import { Context } from "./utils/globalTypes";
import { Bookmarks } from "./components/bookmarks/Bookmarks";

export const token = "d297f14d-3431-11ee-b3e9-14dda9d4a5f0";

export const userContext = React.createContext<Context>({} as Context);

function App() {
  const [user, setUser] = useState<Context>();
  const [editId, setEditId] = useState<number>();

  const login = async () => {
    try {
      const response = await fetch("https://api.shipap.co.il/login", {
        credentials: "include",
      });
      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser, setEditId, editId }}>
      <Routes>
        <Route element={<Dashboard />} path="/"></Route>
        <Route element={<CreateArticle />} path="/create"></Route>
        <Route element={<EditArticle />} path="/edit/:id"></Route>
        <Route element={<Bookmarks />} path="/bookmarks"></Route>
        <Route element={<Article />} path="/article/:id" />
        <Route element={<LoginPage />} path="/admin" />
        <Route element={<SignupPage />} path="/signup" />
      </Routes>
    </userContext.Provider>
  );
}

export default App;

type ListType = {
  addedTime: string;
  description: string;
  headline: string;
  id: number;
  publishDate: string;
  imgUrl?: string | undefined;
  views: 0;
  content: string;
};
