import styled from "styled-components";

export const UserEditWrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  .container {
    min-height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    form {
      width: 70px;
      max-width: 1000px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      place-items: center;
      padding: 20px;
      border-radius: 10px;
      div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
        width: fit-content;
        flex: 0.5;
        label {
          display: block;
          font-size: 20px;
        }
        input {
          width: 300px;
          height: 25px;
          padding: 5px 10px;
          outline: none;
          border: none;
          border-bottom: 1px solid gray;
        }
      }

      button {
        outline: none;
        padding: 5px 25px;
        border-radius: 5px;
        border: none;
        background-color: #b9bab9;
        cursor: pointer;
        font-size: 18px;
        letter-spacing: 2px;
        cursor: pointer;
        transition: 200ms ease;
        margin-top: 20px;
        &:hover {
          letter-spacing: 4px;
        }
      }

      @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        width: 90%;
        div {
          margin: 0 auto;
          width: 100%;

          label {
            margin: 0 auto;
          }

          input {
            width: 80%;
            margin: 0 auto;
          }
        }
        button {
          margin-top: 15px;
        }
      }
    }
  }
`;
