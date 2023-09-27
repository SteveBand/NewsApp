import styled from "styled-components";

export const ProfileModalWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  article {
    width: 70%;
    max-width: 800px;
    height: 60vh;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    position: relative;

    .close-icon {
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 20px;
      cursor: pointer;
    }

    .image-container {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 250px;
      height: 250px;
      border-radius: 50%;
    }

    input {
      width: 70%;
      max-width: 500px;
      height: 20px;
      outline: none;
      border: none;
      background-color: #c2bcbc;
      border-radius: 10px;
      padding: 5px;
      color: black;
      font-size: 18px;
    }

    button {
      padding: 5px 15px;
      border-radius: 10px;
      outline: none;
      border: none;
      background-color: #d7d5d5;
      letter-spacing: 1px;
      transition: 200ms ease;
      cursor: pointer;
      &:hover {
        letter-spacing: 2.5px;
      }
    }
  }
`;
