import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { ClientLogInWrapper } from "./clientLogin-style";
import Joi from "joi";
import { token } from "../../../../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { globalContext } from "../../../../App";
import { Context } from "../../../../utils/globalTypes";
import { SpinnerLoader } from "../../../../components/loaders/spinner/SpinnerLoader";
export const ClientLogin = () => {
  const [params, setParams] = useState({});
  const [errors, setErrors] = useState<{ email: string; password: string }>();
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser, handleSnackbar } = useContext(globalContext) as Context;
  const navigate = useNavigate();

  ///creates schema

  const schema = Joi.object({
    email: Joi.string().min(4),
    password: Joi.string().min(3),
  });
  ///function to update state using OnChange
  const handleInputs = (ev: ChangeEvent) => {
    const target = ev.target as HTMLInputElement;
    const { id, value } = target;
    const obj = {
      ...params,
      [id]: value,
    };
    setParams(obj);
    const errors: any = {};
    ///return validation object from schema to a new constant
    const validation = schema.validate(obj, { abortEarly: false });

    //checks if errors exists inside validation constant if yes then return new constant with new error
    if (validation.error) {
      const error = validation.error.details.find((e) => e.context?.key === id);
      //if error exists pushes it inside errors constant Object
      if (error) {
        errors[id] = error.message;
      }
      setIsValid(false);
    }
    if (validation.error === undefined) {
      setIsValid(true);
    }
    setErrors(errors);
  };

  ///handles server request to check for login
  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.shipap.co.il/clients/login?token=${token}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      //if server return ok it mean user params are true and we direct user to mainPage and setting new localStorage Item as token
      if (res.ok) {
        const data = await res.json();
        ///setting server data as user data in global User state
        setUser(data);
        setLoading(false);
        localStorage.setItem("token", "business");
        navigate("/");
        handleSnackbar(`Welcome ${data.firstName} ${data.lastName}`);
      } else {
        handleSnackbar(`Email or Password is Incorrect`);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ClientLogInWrapper $active={isValid} className="auth-page">
      <form onSubmit={handleSubmit}>
        {loading ? (
          <SpinnerLoader />
        ) : (
          <>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={handleInputs} />
              <p className="error">{errors?.email ? errors?.email : null}</p>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={handleInputs} />
              <p>{errors?.password ? errors.password : null}</p>
            </div>
            <div className="submit-container">
              <button disabled={!isValid}>LogIn</button>
            </div>
            <p>
              Don't have an account yet?{" "}
              <Link to={"/client/signup"}>SignUp here</Link>
            </p>
            <Link to={"/"}>Back to HomPage</Link>
          </>
        )}
      </form>
    </ClientLogInWrapper>
  );
};
