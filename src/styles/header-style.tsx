import styled from "styled-components";

const backgroundColor = "#2E2F41";
const searchWrapperBG = "#3F4254";
const writeBtnBGColor = "#F6AC7A";
export const HeaderWrapper = styled.header<{ dropdown?: string }>`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${backgroundColor};
  height: 100px;
  padding: 0 40px;
  box-sizing: border-box;

  .title {
    color: white;
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      letter-spacing: 1px;
      font-family: "Montserrat", sans-serif;
      font-size: 22px;
      width: initial;
    }

    .icon {
      font-size: 25px;
      transition: 200ms ease-in-out;
      cursor: pointer;
      &:hover {
        scale: 1.2;
      }
    }
  }

  .searchbar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${searchWrapperBG};
    width: 33vw;
    min-width: 200px;
    max-width: 500px;
    padding: 10px;
    height: 35%;
    min-height: 30px;
    position: relative;
    input {
      width: 100%;
      outline: none;
      border: none;
      background-color: transparent;
      color: whitesmoke;
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

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    .profile-pic {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      position: relative;

      .pic {
        font-size: 35px;
        color: white;
        transition: 200ms ease-in;

        &:hover {
          scale: 1.1;
        }
      }

      .arrow {
        color: gray;
        cursor: pointer;
        transition: 200ms ease-in;

        &:hover {
          scale: 1.3;
        }
      }

      .dropdown {
        position: absolute;
        top: 5.2vh;
        background-color: #3f4254;
        width: 80px;
        height: ${(prop) => (prop.dropdown == "true" ? "40px" : "0px")};
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 200ms ease-in-out;
        border-radius: 5px;
        p {
          color: white;
          display: ${(prop) => (prop.dropdown == "true" ? "block" : "none")};
        }
        &:hover {
          background-color: #4a4e63;
        }
      }
    }

    .notifications {
      border-left: 2px solid ${searchWrapperBG};
      border-right: 2px solid ${searchWrapperBG};
      color: white;
      padding: 0 25px;
      cursor: pointer;

      .icon {
        font-size: 30px;
        transition: 200ms ease-in-out;
        &:hover {
          scale: 1.1;
        }
      }
    }

    .write-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      background-color: ${writeBtnBGColor};
      cursor: pointer;
      border-radius: 2px;
      transition: 200ms ease-in;

      &:hover {
        scale: 1.1;
      }
      p {
        font-size: 16px;
      }

      .icon {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 920px) {
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
        padding: 7px 13px;
        gap: 5px;

        p {
          font-size: 14px;
        }

        .icon {
          font-size: 14px;
        }
      }
    }

    .searchbar-wrapper {
      padding: 2px 10px;
    }

    .title {
      p {
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 615px) {
    justify-content: space-evenly;
    .title {
      p {
        display: none;
      }
    }

    .actions {
      gap: 10px;
      .notifications {
        display: none;
      }

      .write-wrapper {
        padding: 7px 10px;
        p {
          display: none;
        }

        icon {
          font-size: 25px;
        }
      }
    }

    .searchbar-wrapper {
      min-width: 170px;
    }
  }

  @media screen and (max-width: 380px) {
    .actions {
      .profile-pic {
        .arrow {
          display: none;
        }
      }
    }
  }
`;
