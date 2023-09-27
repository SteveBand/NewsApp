import styled from "styled-components";

export const ArticlePage = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393a51;
  position: relative;

  .article-wrapper {
    box-sizing: border-box;
    padding: 2%;
    min-width: 60vw;
    min-height: 70vh;
    background-color: #d8d8d8;
    max-width: 900px;
    position: relative;
    .title-container {
      display: flex;
      align-items: center;
      h1 {
        text-align: center;
        letter-spacing: 1px;
        font-size: 24px;
        width: 70%;
        margin: 0 auto;
      }

      .icon {
        font-size: 30px;
        cursor: pointer;
        &:hover {
          scale: 1.1;
        }
      }
    }

    header {
      padding-top: 30px;
      /* overflow-x: hidden; */
      text-overflow: clip;
      .img-container {
        width: 50%;
        min-width: 250px;
        height: 250px;
        min-height: 200px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        float: left;
        margin-right: 10px;
      }
      p {
        text-align: justify;
        word-break: break-all;
        white-space: normal;
      }
    }

    .content {
      padding-top: 20px;
      box-sizing: border-box;

      p {
        padding: 0 5px;
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      color: gray;

      p {
        font-size: 14px;
        right: 0;
        margin-top: 20px;
      }
    }

    .icon-container {
      position: absolute;
      bottom: 0;
      left: 50%;
    }
  }

  @media screen and (max-width: 786px) {
    .article-wrapper {
      footer {
        flex-direction: column;
        gap: 20px;
      }
    }
  }

  @media screen and (max-width: 550px) {
    .article-wrapper {
      .title-container {
        h1 {
          font-size: 20px;
        }
      }
      header {
        .img-container {
          float: none;
          width: inherit;
          margin: 0;
          margin-bottom: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    .article-wrapper {
      header {
        .img-container {
          min-width: 200px;
          height: 200px;
        }
      }
    }
  }
`;
