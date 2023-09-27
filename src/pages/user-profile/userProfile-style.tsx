import styled from "styled-components";

export const UserProfileWrapper = styled.section`
  min-height: 100vh;
  width: 100%;

  .wrapper {
    display: flex;
    height: inherit;
    min-height: calc(100vh - 100px);
    align-items: center;
    justify-content: center;
    .profile-container {
      display: flex;
      flex: 10;
      box-sizing: border-box;
      align-items: center;
      gap: 50px;
      max-height: 100vh;
      padding: 0 30px;

      .image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .image-container {
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 250px;
          max-height: 250px;
          width: 250px;
          border-radius: 50%;
        }

        button {
          outline: none;
          border: none;
          background-color: #dad7d7;
          padding: 5px 15px;
          border-radius: 10px;
          color: #252524;
          cursor: pointer;
          transition: 200ms ease-in-out;

          &:hover {
            background-color: #c3c2c2;
            letter-spacing: 1px;
          }
        }
      }
      .details {
        height: fit-content;
        gap: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        div {
          display: grid;
          grid-template-columns: 1fr 1fr;
          font-size: 20px;
          border-bottom: 1px solid #cecaca;
          gap: 10px;

          p {
            letter-spacing: 1px;
          }

          p:last-child {
            margin: 0 auto;
          }
        }

        button {
          width: max-content;
          margin: 0 auto;
          outline: none;
          border: none;
          background-color: #dad7d7;
          padding: 5px 15px;
          border-radius: 10px;
          color: #252524;
          cursor: pointer;
          transition: 200ms ease-in-out;

          &:hover {
            background-color: #c3c2c2;
            letter-spacing: 1px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1360px) {
    .wrapper {
      .profile-container {
        flex-direction: column;
        gap: 100px;
        .details {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          position: relative;
          div {
            border-bottom: none;
            border-right: 1px solid gray;
            padding: 0 5px;
            flex-wrap: nowrap;
          }
          button {
            position: absolute;
            bottom: -40px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .wrapper {
      .profile-container {
        display: block;
        height: fit-content;
        padding: 10vh auto;

        .image-container {
          margin-top: 10px;
        }

        .details {
          padding-bottom: 20px;

          div {
            p {
              max-width: 150px;
              overflow-wrap: break-word;
            }
          }
        }
      }
    }
  }
`;
