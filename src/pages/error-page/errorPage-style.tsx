import styled from "styled-components";

export const ErrorPageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    h1 {
      letter-spacing: 10px;
    }

    h2 {
      letter-spacing: 10px;
    }

    button {
      padding: 15px 40px;
      outline: none;
      border: none;
      border-radius: 10px;
      transition: 200ms ease;
      background-color: #2a242d;
      cursor: pointer;
      &:hover {
        scale: 1.1;
      }
    }
  }
`;
