import styled from "styled-components";

const writeBtnBGColor = "#F6AC7A";

export const ActionButtonsWrapper = styled.article<{ $dropdown: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  .dark {
    font-size: 25px;
    fill: white;
    cursor: pointer;
  }

  .light {
    font-size: 25px;
    fill: white;
    cursor: pointer;
  }

  .profile-pic {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;

    .pic {
      font-size: 35px;
      transition: 200ms ease-in;

      &:hover {
        scale: 1.1;
      }
    }

    .dropdown {
      position: absolute;
      top: 5.2vh;
      width: 100px;
      height: ${(prop) => (prop.$dropdown ? "80px" : "0px")};
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      transition: 200ms ease-in-out;
      border-radius: 5px;
      left: -60px;
      gap: 20px;
      p {
        display: ${(prop) => (prop.$dropdown ? "block" : "none")};
        text-align: center;
        transition: 200ms ease;
        &:hover {
          letter-spacing: 1.5px;
        }
      }
    }
  }

  .write-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
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

  @media screen and (max-width: 970px) {
    gap: 15px;
    .write-wrapper {
      padding: 10px 5px;
      gap: 2px;

      p {
        font-size: 14px;
      }

      .icon {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 380px) {
    justify-content: center;
    gap: 10px;

    .write-wrapper {
      display: none;
    }
    .profile-pic {
      .pic {
        font-size: 30px;
      }
    }
  }
`;
