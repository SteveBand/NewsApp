import { useContext, useState, useMemo } from "react";
import { UserProfileWrapper } from "./userProfile-style";
import { globalContext } from "../../App";
import { Header } from "../../components/header/Header";
import { ProfileModal } from "./userProfileModal/ProfileModal";
import { SpinnerLoader } from "../../components/loaders/spinner/SpinnerLoader";
export const noPhoto =
  "https://d1bvpoagx8hqbg.cloudfront.net/259/0f326ce8a41915e8b1d21ffaee087fae.jpg";

export const UserProfile = () => {
  const { user } = useContext(globalContext);
  ///opens Modal to change profile image if True
  const [changeImage, setChangeImage] = useState(true);
  ///state made to control if constant fullTableArr should be mapped or not
  const [showAll, setShowAll] = useState(false);

  ///Constant that filters and keeps in Memory the main Information everytime user is changed
  const tableArr = useMemo(() => {
    return (
      user &&
      Object.entries(user).filter((el) => {
        return (
          el[0] === "firstName" ||
          el[0] === "lastName" ||
          el[0] === "email" ||
          el[0] === "phone" ||
          el[0] === "business"
        );
      })
    );
  }, [user]);

  ///Constant that filters and keeps in Memory the sub Information everytime user is changed
  const fullTableArr = useMemo(() => {
    return (
      user &&
      Object.entries(user).filter((el) => {
        return (
          el[0] !== "firstName" &&
          el[0] !== "lastName" &&
          el[0] !== "email" &&
          el[0] !== "phone" &&
          el[0] !== "business"
        );
      })
    );
  }, [user]);

  return (
    <UserProfileWrapper>
      {!changeImage && <ProfileModal setChangeImage={setChangeImage} />}
      <Header />
      {!user?.email && <SpinnerLoader />}
      {user && (
        <section className="wrapper">
          <section className="profile-container">
            <article className="image-wrapper">
              <div
                className="image-container"
                style={{ backgroundImage: `url(${user?.imgUrl || noPhoto})` }}
              ></div>
              <button onClick={() => setChangeImage(!changeImage)}>
                Change Image
              </button>
            </article>
            <article className="details">
              {tableArr?.map((c) => (
                <div key={c[0]}>
                  <p>{c[0]}:</p>
                  <p>{c[1].toString()}</p>
                </div>
              ))}
              {showAll &&
                fullTableArr?.map((c) => (
                  <div key={c[0]}>
                    <p>{c[0]}:</p>
                    <p>{c[1].toString() || "null"}</p>
                  </div>
                ))}
              <button onClick={() => setShowAll(!showAll)}>
                {!showAll ? "View More" : "View Less"}
              </button>
            </article>
          </section>
        </section>
      )}
    </UserProfileWrapper>
  );
};
