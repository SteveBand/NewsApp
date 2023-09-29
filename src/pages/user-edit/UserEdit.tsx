import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { Header } from "../../components/header/Header";
import { UserEditWrapper } from "./userEdit-style";
import { globalContext, token } from "../../App";
import { User } from "../../utils/globalTypes";
import { schema } from "./utils/schema";
import { useNavigate, useParams } from "react-router-dom";

export const UserEdit = () => {
  const { user, setUser } = useContext(globalContext);
  const [params, setParams] = useState<User | undefined>();
  const [errors, setErrors] = useState();
  const [clients, setClients] = useState<User[] | undefined>();
  const { id } = useParams();
  const navigate = useNavigate();

  const userArr = useMemo(() => {
    const userArr =
      user &&
      Object.entries(user).filter((c) => {
        return c[0] !== "fullName" && c[0] !== "id" && c[0] !== "business";
      });
    return userArr;
  }, [user]);

  ///handles inputs onchange and setting a new Object with old/changed params inside "Params" state
  const handleInputs = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    const obj = {
      ...params,
      [id]: value,
    };

    setParams(obj);
    console.log(params);
    ///validates with joi if there are any errors by our made schema
    const validation = schema.validate(obj, { abortEarly: false });
    const errorsObj: any = {};

    //if error exists in validation constant, then we create new constant and using find method to fill the constant with the error

    if (validation.error) {
      const error = validation.error.details.find((e) => e.context?.key === id);
      //if error constant exists then we asign to errorsObj constant the new error
      if (error) {
        errorsObj[id] = error.message;
      }
    }
    //setting the 'errors' State as the "errorObj" constant
    setErrors(errorsObj);
  };

  ///Sending params state as data to the server to edit userData
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      fetch(
        !id
          ? `https://api.shipap.co.il/clients/update?token=${token}`
          : `https://api.shipap.co.il/admin/clients/${id}?token=${token}`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(params),
          ///if server return Ok then we setting the global User State to the new Data by setting user state with params state directly
        }
      ).then((res) => {
        if (res.ok) {
          if (!id) {
            setUser(params);
            navigate("/user/profile");
          }
          navigate("/admin/clients");
        }
      });
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    ///if id exists in URL params then we fetch userData
    if (id) {
      try {
        fetch(`https://api.shipap.co.il/admin/clients?token=${token}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            setClients(data);
          });
      } catch (err) {
        throw err;
      }
    }
  }, [id]);

  ///Constant for setting the specific client we need by Id by find method and returns it as an array for map method by using Object.entries
  const clientArr = useMemo(() => {
    ///searching in clientsData for specific client
    const clientById = clients?.find((c) => c.id == id);
    setParams(clientById);
    const clientArr =
      clientById &&
      Object.entries(clientById).filter((c) => {
        return c[0] !== "fullName" && c[0] !== "id" && c[0] !== "business";
      });
    return clientArr;
  }, [clients]);

  return (
    <UserEditWrapper>
      <Header />
      <section className="container">
        <form onSubmit={handleSubmit}>
          {id
            ? clientArr?.map((elem) => {
                return (
                  <div key={elem[0]}>
                    <label htmlFor={elem[0]}>{elem[0]}</label>
                    <input
                      id={elem[0]}
                      defaultValue={elem[1].toString()}
                      onChange={handleInputs}
                    />
                    {errors && errors[elem[0]] ? (
                      <p className="error">{errors[elem[0]]}</p>
                    ) : null}
                  </div>
                );
              })
            : userArr?.map((elem) => {
                return (
                  <div key={elem[0]}>
                    <label htmlFor={elem[0]}>{elem[0]}</label>
                    <input
                      id={elem[0]}
                      defaultValue={elem[1].toString()}
                      onChange={handleInputs}
                    />
                    {errors && errors[elem[0]] ? (
                      <p className="error">{errors[elem[0]]}</p>
                    ) : null}
                  </div>
                );
              })}
          <button>Edit</button>
        </form>
      </section>
    </UserEditWrapper>
  );
};
