import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthWrapper } from "../../../styles/authpage-style";
export const SignupPage = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState<{}>();
  const signup = async () => {
    try {
      const response = await fetch("https://api.shipap.co.il/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputs = (ev: FormEvent) => {
    const target = ev.target as HTMLInputElement;
    const { id, value } = target;
    const obj = {
      ...params,
      [id]: value,
    };
    setParams(obj);
  };
  return (
    <AuthWrapper>
      <form onSubmit={signup}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          placeholder="Username"
          onChange={handleInputs}
          minLength={2}
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleInputs}
          minLength={4}
          required
        ></input>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" required minLength={4} />
        <button className="log-btn">Sign Up</button>
        <div className="move-to">
          <p>Already have an account?</p>
          <button onClick={() => navigate("/admin")}>Login</button>
        </div>
      </form>
    </AuthWrapper>
  );
};
