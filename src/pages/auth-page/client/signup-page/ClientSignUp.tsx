import React, {
  ChangeEvent,
  useState,
  FormEvent,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { BusinessSignUpWrapper } from "./utils/businessSignup-style";
import { StageOne } from "./stages/stageOne/StageOne";
import { StageTwo } from "./stages/stageTwo/StageTwo";
import { StageThree } from "./stages/stageThree/StageThree";
import { StageProps } from "./utils/types";
import { globalContext, token } from "../../../../App";
import { schema } from "./utils/schema";
import { Link } from "react-router-dom";

export const ClientSignUp = () => {
  const [stage, setStage] = useState(0);
  const [params, setParams] = useState<StageProps>({
    state: "",
    country: "",
    houseNumber: "",
    city: "",
    zip: "",
    middleName: "",
    imgUrl: "",
    imgAlt: "",
    street: "",
    business: false,
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const { handleSnackbar } = useContext(globalContext);
  const navigate = useNavigate();

  ///sending server request to add new User
  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    try {
      const res = await fetch(
        `https://api.shipap.co.il/clients/signup?token=${token}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      ///if server return ok it means user has been created and we redirect user to Login page to login
      if (res.ok) {
        handleSnackbar("Signed up Successfully");
        navigate("/client/login");
      } else {
        handleSnackbar("Something went Wrong, or user already exists");
      }
    } catch (err) {
      console.log(err);
    }
  };

  ///handles swaps between components to fill data inside the form
  const handleNext = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLButtonElement;
    if (target && target.innerHTML === "Next") {
      stage < 2 && setStage((prev) => prev + 1);
    }
  };
  ///handles swaps between components to fill data inside the form
  const handlePrev = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLButtonElement;
    if (target && target.innerHTML === "Prev") {
      stage >= 0 && setStage((prev) => prev - 1);
    }
  };
  ///handle inputs onchange to update params State
  const handleInputs = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    let obj = {
      ...params,
      [id]: value,
    };
    //checks if input id is client type , then check what option client chose and sets business key value inside params Object
    if (id === "clientType" && value === "Business") {
      obj = {
        ...params,
        ["business"]: true,
      };
    }
    if (id === "clientType" && value === "Client") {
      obj = {
        ...params,
        ["business"]: false,
      };
    }
    if (id !== "clientType") {
      obj = {
        ...params,
        [id]: value,
      };
    }
    setParams(obj);
    console.log(params);
    ///return validation object from schema to a new constant
    const validation = schema.validate(obj, { abortEarly: false });
    const errorsObj: any = {};
    //checks if errors exists inside validation constant if yes then return new constant with new error
    if (validation.error) {
      const error = validation.error.details.find((e) => e.context?.key === id);
      //if error exists pushes it inside errors constant Object
      if (error) {
        errorsObj[id] = error.message;
      }
      setIsValid(false);
    }
    if (validation.error === undefined) {
      setIsValid(true);
    }
    setErrors(errorsObj);
    console.log(errors);
  };

  return (
    <BusinessSignUpWrapper $active={isValid} className="auth-page">
      <form onSubmit={handleSubmit}>
        {stage === 0 && (
          <StageOne
            handleInputs={handleInputs}
            params={params}
            errors={errors}
          />
        )}
        {stage === 1 && (
          <StageTwo
            handleInputs={handleInputs}
            params={params}
            errors={errors}
          />
        )}
        {stage === 2 && (
          <StageThree handleInputs={handleInputs} params={params} />
        )}
        <div className="buttons">
          {stage < 2 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button disabled={!isValid} className="submit">
              Submit
            </button>
          )}
          {stage > 0 && <button onClick={handlePrev}>Prev</button>}
        </div>
        <Link className="login-btn" to={"/client/login"}>
          Back to Login
        </Link>
      </form>
    </BusinessSignUpWrapper>
  );
};
