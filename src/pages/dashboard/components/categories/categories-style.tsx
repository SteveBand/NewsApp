import styled from "styled-components";

export const CategoriesWrapper = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=REM&display=swap");
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 30px 0px 30px;
  flex-wrap: wrap;
  .wrapper {
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;

    border-bottom: 1.5px solid #92929268;
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      gap: 35px;
      /* color: #26262668; */
      border-left: 1.5px solid #92929268;
      padding: 0 0 0 40px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      li {
        font-size: 15px;
        cursor: pointer;
        text-underline-offset: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .time {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-right: 40px;
      .upper {
        text-align: center;
        h4 {
          font-size: 25px;
          letter-spacing: 2px;
          /* color: #2e2f41; */
        }
      }

      .bottom {
        display: flex;
        gap: 10px;
        p {
          font-size: 15px;
          margin: 0;
          /* color: #26262668; */
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    .wrapper {
      flex-direction: column;
      gap: 20px;

      .list-wrapper {
        ul {
          margin: 0 auto;
          width: 100%;
          border: none;
          gap: 10px;
          padding: 0;
        }
      }
    }
  }
`;
