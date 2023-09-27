import styled from "styled-components";

const backgroundColor = "#2E2F41";
const searchWrapperBG = "#3F4254";
const writeBtnBGColor = "#F6AC7A";
export const HeaderWrapper = styled.header<{ $dropdown?: string }>`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  padding: 0 15px 0 30px;
  box-sizing: border-box;

  .title {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
    .icon {
      font-size: 25px;
      transition: 200ms ease-in-out;
      cursor: pointer;
      display: none;
      &:hover {
        scale: 1.2;
      }
    }

    ul {
      display: flex;
      list-style: none;
      gap: 10px;
      li {
        font-size: 17px;
        letter-spacing: 1px;
        transition: 200ms ease;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          scale: 1.05;
        }
      }
    }
  }

  .searchbar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 33vw;
    min-width: 200px;
    max-width: 300px;
    padding: 10px;
    height: 35%;
    min-height: 30px;
    position: relative;
    input {
      width: 100%;
      outline: none;
      border: none;
      background-color: transparent;
    }

    .icon {
      fill: gray;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        scale: 1.1;
      }
    }
  }

  .login-btn {
    padding: 10px 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 200ms ease;
    text-decoration: none;
    &:hover {
      scale: 1.05;
    }
  }

  @media screen and (max-width: 970px) {
    padding: 0 10px;
    box-sizing: border-box;

    .actions {
      gap: 15px;

      .profile-pic {
        gap: 5px;

        .pic {
          font-size: 25px;
        }

        .arrow {
          font-size: 12px;
        }
      }

      .notifications {
        padding: 0 10px;

        .icon {
          font-size: 24px;
        }
      }

      .write-wrapper {
        padding: 10px 15px;
        gap: 5px;

        p {
          display: none;
        }

        .icon {
          font-size: 14px;
        }
      }
    }

    .searchbar-wrapper {
      padding: 2px 10px;
    }
  }

  @media screen and (max-width: 890px) {
    justify-content: space-around;
    .title {
      .icon {
        display: block;
      }
      ul {
        display: none;
      }
    }
  }

  @media screen and (max-width: 615px) {
    justify-content: space-around;
    .searchbar-wrapper {
      min-width: 170px;
    }

    .login-btn {
      padding: 10px 20px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 380px) {
    justify-content: space-between;

    .login-btn {
      padding: 10px 15px;
    }
  }
`;
