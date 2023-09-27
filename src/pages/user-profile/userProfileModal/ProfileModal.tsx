import { useState, useContext } from "react";
import { ProfileModalWrapper } from "./profileModal-style";
import { noPhoto } from "../UserProfile";
import { globalContext, token } from "../../../App";
import { AiOutlineClose } from "react-icons/ai";
export const ProfileModal: React.FC<Props> = ({ setChangeImage }) => {
  const { user } = useContext(globalContext);

  //default params that are being sent with fetch to the server to Edit Profile Image
  const [params, setParams] = useState(user);

  ///handles Inputs onChange and sets their values to "params" State
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const obj = {
      ...user,
      [id]: value,
    };
    delete obj.id;
    delete obj.fullName;
    setParams(obj);
  };

  ///handles Fetch call to the server to edit user params
  const handleImageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch(
      `https://api.shipap.co.il/clients/update?token=d29875fa-3431-11ee-b3e9-14dda9d4a5f0`,
      {
        method: "PUT",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(params),
      }
      //if response from server if Ok then modal closed by setting changeImage state to false
    ).then((res) => res.ok && setChangeImage((prev) => !prev));
  };
  return (
    <ProfileModalWrapper>
      <article>
        <AiOutlineClose
          className="close-icon"
          onClick={() => setChangeImage((prev) => !prev)}
        />
        <div
          style={{ backgroundImage: `url(${params?.imgUrl || noPhoto}` }}
          className="image-container"
        ></div>
        <input type="text" id="imgUrl" onChange={handleInput} />
        <button onClick={handleImageChange}>Submit</button>
      </article>
    </ProfileModalWrapper>
  );
};

interface Props {
  setChangeImage: React.Dispatch<React.SetStateAction<boolean>>;
}
