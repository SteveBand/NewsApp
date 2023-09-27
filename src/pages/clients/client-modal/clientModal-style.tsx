import styled from "styled-components";

export const ClientModalWrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  transition: 300ms ease;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-container {
    height: 70vh;
    min-height: 70vh;
    background-color: #eeecec;
    border-radius: 20px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1500px;
    min-width: 700px;
    .exit-icon {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;

      &:hover {
        scale: 1.2;
      }
    }

    .img-container {
      flex: 1;
      height: inherit;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .icon {
        width: 100%;
        height: inherit;
      }
    }

    .content {
      box-sizing: border-box;
      flex: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0 20px;
      gap: 10px;

      .detail {
        display: flex;
        gap: 5px;

        p {
          width: fit-content;
        }

        & p:first-child {
          font-weight: 600;
        }
      }

      .buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;

        a {
          color: white;
          background-color: #3f753f;
          text-decoration: none;
          width: max-content;
          padding: 5px 10px;
          border-radius: 5px;
          transition: 200ms ease;
          &:hover {
            scale: 1.05;
          }
        }

        button {
          width: max-content;
          border: none;
          outline: none;
          background-color: #ec2c2c;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          transition: 200ms ease;
          &:hover {
            scale: 1.05;
          }
        }
      }
    }

    @media screen and (min-width: 1250px) {
      .content {
        padding: 10% 10px;
        .detail {
          display: flex;
          flex-direction: column;

          & p:first-child {
            font-size: 20px;
            letter-spacing: 1px;
          }

          & p:last-child {
            font-size: 18px;
          }
        }
      }
    }

    @media screen and (max-width: 700px) {
      width: 100%;
      min-width: 300px;
      .img-container {
        display: none;
      }

      .content {
        height: 90%;
        place-items: center;
        .detail {
        }
      }
    }

    @media screen and (max-width: 370px) {
      width: 100%;
      .img-container {
        display: none;
      }

      .content {
        .detail {
          width: 100px;
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }
      }
    }
  }
`;
