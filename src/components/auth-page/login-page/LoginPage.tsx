import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthWrapper } from "../../../styles/authpage-style";
import { userContext } from "../../../App";
import { Context } from "../../../utils/globalTypes";

export const LoginPage = () => {
  const { user, setUser } = useContext(userContext) as Context;
  const [params, setParams] = useState<{}>();
  const navigate = useNavigate();

  const handleInputs = (ev: ChangeEvent) => {
    const target = ev.target as HTMLInputElement;
    const { id, value } = target;
    const obj = {
      ...params,
      [id]: value,
    };
    setParams(obj);
  };

  const login = async (ev: FormEvent) => {
    ev.preventDefault();
    try {
      const response = await fetch("https://api.shipap.co.il/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      const data: any = await response.json();
      setUser(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthWrapper>
      <form onSubmit={login}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          placeholder="Username"
          onChange={handleInputs}
          minLength={2}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleInputs}
          minLength={4}
        ></input>
        <button className="log-btn">Login</button>
        <div className="move-to">
          <p>Don't have an account?</p>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </form>
    </AuthWrapper>
  );
};
