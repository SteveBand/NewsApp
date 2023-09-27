import styled from "styled-components";

export const UserProfileWrapper = styled.section`
  min-height: 100vh;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  .content-wrapper {
    display: flex;
    width: 100%;
    min-height: calc(100vh - 100px);
    .articles-content {
      flex: 11;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      padding: 0 0 20px 0;

      h1 {
        margin-top: 10px;
        letter-spacing: 2px;
        font-size: 20px;
      }
      .article-wrapper {
        width: 60%;
        min-height: 70px;
        display: flex;
        align-items: center;
        transition: 200ms ease-in-out;
        padding: 0 20px;
        border-radius: 5px;
        .link {
          display: flex;
          align-items: center;
          flex: 10;
          gap: 30px;
          text-decoration: none;
          .img-container {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 50px;
            width: 50px;
          }

          .title {
            justify-self: center;
            letter-spacing: 1px;
            width: 60%;
          }
        }
        .buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1.4;
          display: flex;
          justify-content: space-between;

          button {
            background-color: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            transition: 200ms ease;

            &:hover {
              scale: 1.1;
              color: #d20d0d;
            }
          }

          a {
            text-decoration: none;
            background-color: transparent;
            transition: 200ms ease;
            &:hover {
              scale: 1.1;
            }
          }
        }

        &:hover {
          /* background-color: #3f4254; */
        }

        &:hover .link > .title,
        &:hover .buttons > a,
        &:hover .buttons > button {
          /* color: whitesmoke; */
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .content-wrapper {
      .articles-content {
        .article-wrapper {
          .buttons {
            flex-direction: column;
            justify-content: center;
            gap: 5px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .content-wrapper {
      .articles-content {
        .article-wrapper {
          padding: 10px 20px;
          flex-direction: column;
          gap: 30px;
          align-items: center;
          .link {
            flex-direction: column;
            gap: 10px;
            .img-container {
              width: 100%;
              height: 90px;
            }
            .title {
              width: 100%;
            }
          }
          .buttons {
            flex-direction: row;
            width: 70%;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;
