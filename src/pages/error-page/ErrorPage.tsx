import { useNavigate } from "react-router-dom";
import { ErrorPageWrapper } from "./errorPage-style";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorPageWrapper>
      <div>
        <h1>ERROR 404</h1>
        <h2>PAGE WAS NOT FOUND!</h2>
        <button onClick={() => navigate("/")}>BACK HOME!</button>
      </div>
    </ErrorPageWrapper>
  );
};
