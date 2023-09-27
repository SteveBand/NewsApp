import styled from "styled-components";

export const ClientLogInWrapper = styled.section<{ $active: boolean }>`
  @import url("https://fonts.googleapis.com/css2?family=Phudu:wght@300&display=swap");
  width: 100%;
  height: 100vh;
  /* background-color: #393a51; */
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 30%;
    min-width: 300px;
    max-width: 900px;
    /* background-color: #d3d3d3; */
    display: flex;
    align-items: center;
    gap: 40px;
    flex-direction: column;

    border-radius: 20px;
    padding: 40px 0;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
      label {
        display: block;
        margin-bottom: 5px;
        letter-spacing: 1px;
      }

      input {
        width: 60%;
        background-color: transparent;
        border: 1px solid gray;
        outline: none;
        height: 30px;
        padding: 0 5px;
        letter-spacing: 1.5px;
        border-radius: 5px;
      }
    }

    .submit-container {
      button {
        padding: 5px 20px;
        background-color: ${(prop) => (prop.$active ? "#393a51" : "#6a6b6e")};
        color: #ebe9e9;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 300ms ease-in-out;

        &:hover {
          letter-spacing: 3px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    form {
      min-width: 220px;
    }
  }
`;
