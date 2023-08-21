import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useContext,
  useEffect,
} from "react";
import { CreateArticleWrapper } from "../../../styles/Create-style";
import { token } from "../../../App";
import { useParams, useNavigate } from "react-router-dom";

export const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [params, setParams] = useState<ListType>({
    description: "",
    headline: "",
    content: "",
    publishDate: "",
    imgUrl: "",
  });
  const handleInputs = (ev: ChangeEvent) => {
    const { id, value } = ev.target as HTMLInputElement;
    const obj = {
      ...params,
      [id]: value,
    };
    const { content, description, publishDate, imgUrl, headline } = obj;
    setParams({ content, description, publishDate, imgUrl, headline });
  };

  const handleEdit = (ev: FormEvent) => {
    ev.preventDefault();
    try {
      fetch(`https://api.shipap.co.il/articles/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }).then(() => navigate(`/article/${id}`));
    } catch (err) {
      console.log(err);
    }
  };

  const getArticle = async () => {
    const res = await fetch(
      `https://api.shipap.co.il/articles/${id}?token=${token}`,
      {
        credentials: "include",
      }
    );
    const data = await res.json();
    setParams(data);
  };

  useEffect(() => {
    if (id) {
      getArticle();
    }
  }, [id]);
  return (
    <CreateArticleWrapper>
      <form onSubmit={handleEdit}>
        <div>
          <label htmlFor="headline">Headline</label>
          <input
            type="text"
            id="headline"
            onChange={handleInputs}
            minLength={2}
            required
            value={params?.headline}
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
            value={params?.description}
          ></input>
        </div>
        <div>
          <label htmlFor="imgUrl">Image Url:</label>
          <input
            type="text"
            id="imgUrl"
            onChange={handleInputs}
            value={params?.imgUrl}
          ></input>
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            onChange={handleInputs}
            minLength={20}
            required
            value={params?.content}
          ></textarea>
        </div>

        <button>Edit</button>
      </form>
    </CreateArticleWrapper>
  );
};

type ListType = {
  description: string;
  headline: string;
  content: string;
  publishDate: string;
  imgUrl?: string;
};
