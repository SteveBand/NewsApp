import styled from "styled-components";

const BgColor = "#b9b5b5";
const formBgColor = "#2E2F41";
const inputBgColor = "#3F4254";

export const AuthWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    padding: 40px 20px;
    label {
      display: block;
      color: #cac2c2;
      letter-spacing: 2px;
    }

    input {
      border: none;
      outline: none;
      padding: 10px;
      color: whitesmoke;
    }

    .log-btn {
      outline: none;
      border: none;
      border-radius: 5px;
      padding: 10px 30px;
      color: whitesmoke;
      letter-spacing: 1px;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        scale: 1.1;
      }
    }

    .move-to {
      display: flex;
      color: white;
      gap: 10px;

      button {
        padding: 3px 10px;
        background-color: transparent;
        border: none;
        outline: none;
        letter-spacing: 1px;
        cursor: pointer;

        &:hover {
          scale: 1.1;
        }
      }
    }
  }
`;
