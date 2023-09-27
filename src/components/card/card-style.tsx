import styled from "styled-components";

export const CardWrapper = styled.article<{ $dropdown: string; $img: string }>`
  justify-self: center;
  flex-grow: 1;
  flex-basis: 400px;
  max-width: 780px;
  .article-wrapper {
    border-radius: 2px;
    padding: 10px 10px 5px 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    flex-wrap: wrap;
    cursor: pointer;
    transition: 300ms ease-in-out;
    text-decoration: none;
    min-height: 450px;
    margin: 0 auto;

    .title {
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 1px;
      flex: 1;
    }

    .link {
      text-decoration: underline;
      text-underline-offset: 3px;
      width: fit-content;
      flex: 0.5;
      &:hover {
        scale: 1.05;
      }
    }

    .img-container {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      flex: 3;
    }
    footer {
      letter-spacing: 1px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex: 0.5;

      .options {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .icon {
          cursor: pointer;

          &:hover {
            scale: 1.1;
          }
        }

        .heart {
          font-size: 22px;
        }

        .active {
          fill: #c80e0ee8;
        }

        .dropdown {
          position: absolute;
          padding: 0px 5px;
          left: -5px;
          top: 20px;
          z-index: 20;
          border-radius: 5px;
          min-width: 100px;
          height: ${(prop) => (prop.$dropdown === "true" ? "auto" : "0px")};
          ul {
            text-align: center;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            list-style: none;
            display: ${(prop) =>
              prop.$dropdown === "true" ? "block" : "none"};

            li {
              margin: 10px 0;
              padding: 3px 0;

              &:hover {
                scale: 1.05;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 786px) {
    width: 100%;
    .article-wrapper {
      width: 80%;
    }
  }
`;
