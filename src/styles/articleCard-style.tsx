import styled from "styled-components";

export const CardWrapper = styled.article<{ dropdown: string; img: string }>`
  .article-wrapper {
    background-color: #ffffff;
    border-radius: 2px;
    padding: 10px 10px 5px 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    cursor: pointer;
    transition: 300ms ease-in-out;
    text-decoration: none;
    color: black;

    .link {
      text-decoration: underline;
      color: black;
      text-underline-offset: 3px;
      width: fit-content;
      &:hover {
        scale: 1.05;
      }
    }

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);
    }
    .img-container {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 150px;
    }
    footer {
      color: gray;
      letter-spacing: 1px;
      display: flex;
      justify-content: space-between;
      width: 100%;

      .options {
        position: relative;
        .icon {
          cursor: pointer;

          &:hover {
            scale: 1.1;
            color: black;
          }
        }

        .dropdown {
          position: absolute;
          background-color: #4a4e62;
          padding: 0px 5px;
          right: -10px;
          top: 15px;
          z-index: 20;
          border-radius: 5px;
          min-width: 100px;
          height: ${(prop) => (prop.dropdown === "true" ? "auto" : "0px")};
          ul {
            color: white;
            text-align: center;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            list-style: none;
            display: ${(prop) => (prop.dropdown === "true" ? "block" : "none")};

            li {
              margin: 10px 0;
              padding: 3px 0;

              &:hover {
                scale: 1.05;
                background-color: #54596f;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 660px) {
    .articles-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
