import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateArticleWrapper } from "../../../styles/Create-style";

export const CreateArticle = () => {
  const [params, setParams] = useState({
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyyny9BpJRxm1VecmT0ot-xIMXKJu9-5dgA&usqp=CAU",
  });
  const navigate = useNavigate();

  const handleInputs = (ev: ChangeEvent) => {
    const { id, value } = ev.target as HTMLInputElement;
    const obj = {
      ...params,
      [id]: value,
    };
    setParams(obj);
    console.log(params);
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    try {
      const response = await fetch("https://api.shipap.co.il/articles", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      data && data.id && navigate(`/article/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CreateArticleWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="headline">Headline</label>
          <input
            type="text"
            id="headline"
            onChange={handleInputs}
            minLength={2}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            onChange={handleInputs}
            minLength={3}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="imgUrl">Image Url:</label>
          <input type="text" id="imgUrl" onChange={handleInputs}></input>
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            onChange={handleInputs}
            minLength={20}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="publishDate">Publish Date</label>
          <input
            id="publishDate"
            type="datetime-local"
            onChange={handleInputs}
            required
          ></input>
        </div>

        <button>Publish</button>
      </form>
    </CreateArticleWrapper>
  );
};
