import styled from "styled-components";

const bgColor = "#F0F0F0";
const titleColor = "#3F4254";
export const TrendingWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=REM&display=swap");
  position: sticky;
  top: 0;
  right: 0;
  background-color: ${bgColor};
  min-height: calc(100vh - 100px);
  box-sizing: border-box;
  padding: 30px 20px;
  overflow-x: scroll;
  .container {
    position: sticky;
    top: 0;
    right: 0;
  }
  .title {
    display: flex;
    justify-content: space-between;
    color: ${titleColor};
    font-family: "REM", sans-serif;

    p {
      letter-spacing: 1.5px;
    }

    .buttons-container {
      display: flex;
      gap: 10px;

      .icon {
        font-size: 20px;
        cursor: pointer;

        &:hover {
          scale: 1.1;
        }
      }
    }
  }

  .articles-container {
    box-sizing: border-box;
    padding: 5% 2%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .article-wrapper {
      display: flex;
      width: 100%;
      gap: 10px;
      box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.55);
      background-color: transparent;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      transition: 300ms ease-in-out;
      text-decoration: none;
      color: black;
      &:hover {
        scale: 1.004;
      }

      .img-container {
        min-width: 150px;
        height: 100px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .content {
        width: 100%;
        display: flex;
        flex-direction: column;

        p {
          height: 50%;
        }

        footer {
          display: flex;
          justify-content: space-between;
          color: gray;
          .icon {
            cursor: pointer;

            &:hover {
              scale: 1.1;
              color: black;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1050px) {
    .article-wrapper {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 786px) {
    grid-column: span 12;
    grid-row: 200px;
    min-height: 65vh;

    .container {
      position: relative;
      .title {
        justify-content: end;
        flex-direction: column;
        gap: 10px;
        text-align: center;

        p {
          font-size: 20px;
        }
      }
    }
    .articles-container {
      display: flex;
      flex-direction: row;
    }
  }
`;
