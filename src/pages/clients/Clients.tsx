import { useState, useContext, useEffect } from "react";
import { Header } from "../../components/header/Header";
import { ClientsWrapper } from "./utils/clients-style";
import { CgProfile } from "react-icons/cg";
import { token, globalContext } from "../../App";
import { User } from "../../utils/globalTypes";
import { ClientModal } from "./client-modal/ClientModal";
import { SpinnerLoader } from "../../components/loaders/spinner/SpinnerLoader";

export const Clients = () => {
  const [clients, setClients] = useState<User[]>();
  const [modalContent, setModalContent] = useState<User>({});
  const { user } = useContext(globalContext);

  ///Default image for when there is not profile image
  const unkownPerson =
    "https://img.favpng.com/12/18/18/computer-icons-user-profile-avatar-clip-art-png-favpng-1h5DmARudiSiRFPPuuNsuhsfJ.jpg";

  ///function that recieves data and sets modalContent into the data it recieves to show inside the modal
  const handleModal = (content: User) => {
    setModalContent(content);
  };
  ///useEffect checks if user is adming, if true it fetches data from the server and returns Clients Data
  useEffect(() => {
    if (user?.admin) {
      try {
        fetch(`https://api.shipap.co.il/admin/clients?token=${token}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => data.length && setClients(data));
      } catch (err) {
        throw err;
      }
    }
  }, [user]);

  return (
    <ClientsWrapper>
      {modalContent && Object.keys(modalContent).length ? (
        <ClientModal
          setModalContent={setModalContent}
          modalContent={modalContent}
          setClients={setClients}
          clients={clients}
        />
      ) : (
        ""
      )}
      <Header clients={clients} setModal={setModalContent} />
      <section className="container">
        <article className="clients-container">
          {!clients && <SpinnerLoader />}
          {clients &&
            clients.map((client: User) => {
              return (
                <article
                  className="client-wrapper"
                  key={client.id}
                  id={client.id}
                  onClick={() => handleModal(client)}
                >
                  <div
                    className="img-container"
                    style={{
                      backgroundImage: `url(${client.imgUrl || ""})`,
                    }}
                  >
                    {!client.imgUrl && <CgProfile className="icon" />}
                  </div>
                  <div className="content">{`${client.firstName} ${client.lastName}`}</div>
                </article>
              );
            })}
        </article>
      </section>
    </ClientsWrapper>
  );
};
