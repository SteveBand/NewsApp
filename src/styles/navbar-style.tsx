import { styled } from "styled-components";

const BgColor = "#F0F0F0";
const activeColor = "#d8d5d5";

export const NavWrapper = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=REM&display=swap");
  height: 100vh;
  width: 10vw;
  min-width: 100px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${BgColor};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: "REM", sans-serif;
  font-weight: 900;
  letter-spacing: 0.5px;

  .link {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    color: black;
    gap: 10px;
    padding: 25px 0;
    cursor: pointer;
    transition: 200ms ease;
    position: sticky;
    top: 0;
    left: 0;
    .icon {
      font-size: 25px;
    }

    p {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 786px) {
    min-width: 70px;
    justify-content: space-evenly;
    align-items: center;
    .link {
      padding: 0;
      margin: 0;
      p {
        font-size: 10px;
      }
    }
  }
`;
