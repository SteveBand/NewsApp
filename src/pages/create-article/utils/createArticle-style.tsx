import styled from "styled-components";

export const CreateArticleWrapper = styled.section<{ $isValid?: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: #cbcbcb;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    max-width: 1000px;
    min-width: 450px;
    min-height: 70vh;
    background-color: whitesmoke;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    div {
      width: 100%;
      label {
        display: block;
        letter-spacing: 2px;
        font-size: 18px;
        margin-bottom: 5px;
      }

      input {
        border: none;
        outline: none;
        background-color: transparent;
        border-bottom: 3px solid #333f75;
        width: 80%;
        min-width: 200px;
        max-width: 300px;
        padding: 5px;
        color: black;
      }

      textarea {
        outline: none;
        min-height: 100px;
        min-width: 250px;
        color: #555454;
        max-width: 400px;
        border-color: #333f75;
      }
    }

    button {
      padding: 5px 25px;
      border-radius: 5px;
      border: none;
      /* background-color: #333f75; */
      background-color: ${(prop) => (prop.$isValid ? "#333f75" : "gray")};
      color: white;
      cursor: pointer;
      transition: 300ms ease;

      &:hover {
        scale: 1.1;
      }
    }
  }

  @media screen and (max-width: 460px) {
    form {
      width: 98%;
      min-width: auto;
    }
  }
`;
