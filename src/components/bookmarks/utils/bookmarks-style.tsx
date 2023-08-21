import styled from "styled-components";

export const BookmarksWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz@10..48&display=swap");
  min-height: calc(100vh - 100px);
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;

  .container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 50px;
    font-family: "Bricolage Grotesque", sans-serif;
    position: relative;

    h1 {
      letter-spacing: 3px;
      font-size: 30px;
      color: #3f4254;
    }
    .article-card {
      display: grid;
      grid-template-columns: 1fr 60px;
      grid-template-rows: repeat(1, 1fr);
      max-width: 1200px;
      text-decoration: none;
      color: black;
      font-size: 17px;
      padding: 10px;
      background-color: white;
      height: fit-content;
      transition: 300ms ease-in-out;

      .link-container {
        display: grid;
        grid-template-columns: 20% 70%;
        text-decoration: none;
      }

      .img-container {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 70px;
        height: 50px;
      }

      .headline {
        letter-spacing: 2px;
        text-decoration: none;
        color: black;
        align-self: center;
      }

      .buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        letter-spacing: 1px;
        /* width: fit-content; */

        p {
          cursor: pointer;
          &:hover {
            scale: 1.1;
            color: #e71f1f;
          }
        }
      }

      @media screen and (max-width: 570px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        .link-container {
          gap: 50px;
        }
      }
      &:hover {
        background-color: #3f4254;
        color: white;
      }
      &:hover .headline {
        color: white;
      }
    }
    .back-btn {
      text-decoration: none;
      color: black;
      background-color: white;
      width: fit-content;
      color: black;
      padding: 10px 30px;
      border-radius: 13px;
      letter-spacing: 2px;
      align-self: center;
      transition: 300ms ease-in-out;

      &:hover {
        scale: 1.1;
        background-color: #3f4254;
        color: white;
      }
    }
  }
`;
