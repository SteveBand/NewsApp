import styled from "styled-components";

export const BusinessSignUpWrapper = styled.section<{ $active: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 40%;
    min-height: 40vh;
    min-width: 500px;
    max-width: 900px;
    border-radius: 20px;
    text-align: center;
    padding: 20px;
    .buttons {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-bottom: 10px;
      button {
        padding: 5px 20px;
        border-radius: 3px;
        outline: none;
        border: none;
        background-color: #393a51;
        color: #ebe9e9;
        letter-spacing: 2px;
        cursor: pointer;
        transition: 300ms ease-in-out;

        &:hover {
          letter-spacing: 5px;
        }
      }

      .submit {
        transition: 100ms ease-in-out;
        background-color: ${(prop) => (prop.$active ? "#393a51" : "#727279")};
      }
    }
  }

  @media screen and (max-width: 501px) {
    form {
      width: 95%;
      min-width: 300px;
    }
  }
`;
