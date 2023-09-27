import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateArticleWrapper } from "./utils/createArticle-style";
import { schema } from "./utils/schema";
import { globalContext } from "../../App";
export const CreateArticle = () => {
  const [params, setParams] = useState({
    zip: "",
    houseNumber: 0,
    street: "",
    city: "",
    country: "",
    state: "",
    web: "",
    email: "",
    phone: "",
    imgAlt: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isValid, setIsValid] = useState(false);
  const { handleSnackbar, setAllArticles } = useContext(globalContext);
  const navigate = useNavigate();

  ///handle inputs Onchange function to update state
  const handleInputs = (ev: ChangeEvent) => {
    const { id, value } = ev.target as HTMLInputElement;
    const obj = {
      ...params,
      [id]: value,
    };
    setParams(obj);
    const errors: any = {};
    ///return validation object from schema
    const validation = schema.validate(obj, { abortEarly: false });

    ///if validation has an error it finds the error and returns it to a new constant
    if (validation.error) {
      const error = validation.error.details.find((e) => e.context?.key === id);
      ///pushes the new error inside the errors constant object
      if (error) {
        errors[id] = error.message;
      }
      ///if there are errors then state valid is false to not allow sending requests to server
      setIsValid(false);
    }
    if (validation.error === undefined) {
      setIsValid(true);
    }
    setErrors(errors);
  };
  /// function that handles data send request to the server to create new article in the database
  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    try {
      const response = await fetch(
        `https://api.shipap.co.il/business/cards?token=d29875fa-3431-11ee-b3e9-14dda9d4a5f0`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      ///if server returns ok then change global allArticles state for faster render update, and navigate to that new article page
      if (response.ok) {
        const data = await response.json();
        handleSnackbar("Article successfully added");
        setAllArticles((prev) => [...prev, data]);
        data && data.id && navigate(`/article/${data.id}`);
      } else {
        ///if server does not return ok show snackbar that it failed
        handleSnackbar("Unauthorized");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CreateArticleWrapper $isValid={isValid} className="article-change">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Headline</label>
          <input
            type="text"
            id="title"
            onChange={handleInputs}
            minLength={2}
            required
          ></input>
          <p>{errors.title ? errors.title : null}</p>
        </div>
        <div>
          <label htmlFor="subtitle">Subtitle</label>
          <input
            id="subtitle"
            type="text"
            onChange={handleInputs}
            required
          ></input>
          <p>{errors.subtitle ? errors.subtitle : null}</p>
        </div>
        <div>
          <label htmlFor="imgUrl">Image Url:</label>
          <input type="text" id="imgUrl" onChange={handleInputs}></input>
        </div>
        <div>
          <label htmlFor="description">Content</label>
          <textarea
            id="description"
            onChange={handleInputs}
            minLength={20}
            required
          ></textarea>
          <p>{errors.description ? errors.description : null}</p>
        </div>
        <button disabled={!isValid}>Publish</button>
      </form>
    </CreateArticleWrapper>
  );
};
