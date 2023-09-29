import styled from "styled-components";

export const HeaderWrapper = styled.header<{ $dropdown?: string }>`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  padding: 0 15px 0 30px;
  box-sizing: border-box;

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
