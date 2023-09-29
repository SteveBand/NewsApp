import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useContext,
  useEffect,
} from "react";
import { CreateArticleWrapper } from "../create-article/utils/createArticle-style";
import { useParams, useNavigate } from "react-router-dom";
import { globalContext, token } from "../../App";
import { LettersLoader } from "../../components/loaders/letters/LettersLoader";
import { ArticleType } from "../../utils/globalTypes";

export const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleSnackbar, allArticles, setAllArticles } =
    useContext(globalContext);
  const [loader, setLoader] = useState(false);

  const [params, setParams] = useState<ArticleType>({
    description: "",
    title: "",
    subtitle: "",
    imgUrl: "",
    phone: "",
    email: "",
    web: "",
    imgAlt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    id: Number(id),
  });

  ///handles inputs onChange method to keep params State updated
  const handleInputs = (ev: ChangeEvent) => {
    const { id, value } = ev.target as HTMLInputElement;
    const obj = {
      ...params,
      [id]: value,
    };

    setParams(obj);
  };

  ///handles server request and sends the server the changed data of the article
  const handleEdit = async (ev: FormEvent) => {
    setLoader(true);
    ev.preventDefault();
    try {
      const res = await fetch(
        `https://api.shipap.co.il/business/cards/${id}?token=d29875fa-3431-11ee-b3e9-14dda9d4a5f0`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      if (res.ok) {
        handleSnackbar("Article Successfully Edited");
        const newArr = allArticles.map((c) => {
          if (c.id === Number(id)) {
            return params;
          }
          return c;
        });
        setAllArticles(newArr);
        navigate(`/article/${params.id}`);
      } else {
        handleSnackbar("something went Wrong Or you are Unautherized");
      }
    } catch (err) {
      console.log(err);
    }
  };
  ///useEffect for if Id exists in URL params if fetches specific article from the server
  useEffect(() => {
    try {
      if (id) {
        fetch(`https://api.shipap.co.il/cards/${id}?token=${token}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            setParams(data);
          });
      }
    } catch (err) {
      throw err;
    }
  }, [id]);

  return (
    <CreateArticleWrapper className="article-change">
      <form onSubmit={handleEdit}>
        {loader ? (
          <LettersLoader />
        ) : (
          <>
            <div>
              <label htmlFor="title">Headline</label>
              <input
                type="text"
                id="title"
                onChange={handleInputs}
                minLength={2}
                required
                defaultValue={params?.title}
              ></input>
            </div>
            <div>
              <label htmlFor="subtitle">Description</label>
              <input
                type="text"
                id="subtitle"
                onChange={handleInputs}
                minLength={3}
                required
                defaultValue={params?.subtitle}
              ></input>
            </div>
            <div>
              <label htmlFor="imgUrl">Image Url:</label>
              <input
                type="text"
                id="imgUrl"
                onChange={handleInputs}
                defaultValue={params?.imgUrl}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Content</label>
              <textarea
                id="description"
                onChange={handleInputs}
                minLength={20}
                required
                defaultValue={params?.description}
              ></textarea>
            </div>

            <button>Edit</button>
          </>
        )}
      </form>
    </CreateArticleWrapper>
  );
};
