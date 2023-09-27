import { Dispatch, SetStateAction } from "react";
import { User } from "../../../utils/globalTypes";
import { ClientModalWrapper } from "./clientModal-style";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { token } from "../../../App";
export const ClientModal: React.FC<Props> = ({
  setModalContent,
  modalContent,
  setClients,
  clients,
}) => {
  const noPhoto =
    "https://www.pngitem.com/pimgs/m/287-2876223_no-profile-picture-available-hd-png-download.png";

  const { id, imgUrl } = modalContent;
  ///turns user Object content to array to map for better clean code
  const arr = Object.entries(modalContent);

  ///deletes client from DataBase by sending request to the server///

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let check = window.confirm(
      `Are you sure you want to delete user ID ${id}?`
    );
    if (check) {
      fetch(`https://api.shipap.co.il/admin/clients/${id}?token=${token}`, {
        method: "DELETE",
        credentials: "include",
      });
      ///if check returns true, then we create new array using filter without the user that was removed
      //and changing state to render the web for a quick update
      const newClients = clients?.filter((el) => el.id !== id);
      setClients(newClients);
      ///cleaning modal after user was deleted
      setModalContent({});
    }
  };

  return (
    <ClientModalWrapper>
      <section className="modal-container">
        <AiOutlineClose
          className="exit-icon"
          onClick={() => setModalContent({})}
        />
        <div
          className="img-container"
          style={{ backgroundImage: `url(${imgUrl || noPhoto})` }}
        ></div>
        <div className="content">
          {arr.map((i, n) => {
            return (
              <div className="detail" key={n}>
                <label htmlFor={`${i[0]}`}>{`${i[0]}:`}</label>
                <p id={`${i[0]}`}>{`${i[1] || "null"}`}</p>
              </div>
            );
          })}
          <div className="buttons">
            <Link to={`/user/edit/${id}`}>Edit Client</Link>
            <button onClick={handleDelete}>Delete Client</button>
          </div>
        </div>
      </section>
    </ClientModalWrapper>
  );
};

interface Props {
  setModalContent: Dispatch<SetStateAction<User>>;
  modalContent: User;
  setClients: Dispatch<SetStateAction<User[] | undefined>>;
  clients: User[] | undefined;
}
