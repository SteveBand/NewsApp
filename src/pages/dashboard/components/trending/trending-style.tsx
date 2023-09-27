import styled from "styled-components";

const bgColor = "#F0F0F0";
const titleColor = "#3F4254";
export const TrendingWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=REM&display=swap");
  position: sticky;
  top: 0;
  right: 0;
  height: 100vh;
  box-sizing: border-box;
  padding: 30px 20px;
  overflow-x: scroll;
  box-sizing: border-box;
  min-width: 200px;
  flex: 2;
  border-left: 2px solid #3c3c3c;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  .container {
    position: sticky;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  }
  .title {
    display: flex;
    justify-content: space-between;
    height: max-content;

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
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      transition: 300ms ease-in-out;
      text-decoration: none;

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
      }
    }
  }

  @media screen and (max-width: 1800px) {
    .article-wrapper {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 786px) {
    flex: 1 0 100%;
    height: max-content;
    border: none;
    border-top: 2px solid #3c3c3c;
    .container {
      flex: 100%;
      gap: 20px;
      .articles-container {
        flex-direction: row;
        box-sizing: border-box;
        padding: 0 20px;
      }
    }
  }
`;
