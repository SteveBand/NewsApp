import styled from "styled-components";

export const ContetPageWrapper = styled.section`
  width: 100vw;
  min-height: calc(100vh - 100px);
  background-color: color;
  display: grid;
  grid-template-columns: 1fr 7fr 4fr;
  grid-template-rows: repeat(1, 1fr);
  box-sizing: border-box;

  @media screen and (max-width: 786px) {
    grid-template-columns: 0.2fr 11.8fr;
    grid-template-rows: 2 span;
  }
`;

export const MidContentWrapper = styled.section`
  box-sizing: border-box;
  background-color: #f7f7f7;
  padding: 0 0 80px 0;
  &::-webkit-scrollbar {
    display: none;
  }
  .articles-container {
    padding: 5%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(fill, 1fr);
    gap: 40px;
  }

  @media screen and (max-width: 660px) {
    .articles-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

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
      list-style: none;
      gap: 35px;
      font-family: "REM", sans-serif;
      color: #26262668;
      border-left: 1.5px solid #92929268;
      padding: 0 0 0 40px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      li {
        font-size: 15px;
        cursor: pointer;
        &:hover {
          border-bottom: 1px solid #26262668;
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
          color: #2e2f41;
        }
      }

      .bottom {
        display: flex;
        gap: 10px;
        p {
          font-size: 15px;
          margin: 0;
          color: #26262668;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .wrapper {
      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .wrapper {
      ul {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media screen and (max-width: 842px) {
    padding: 10px 10px 20px 10px;
    .wrapper {
      ul {
        gap: 15px;

        li {
          font-size: 13px;
        }
      }
    }
  }

  @media screen and (max-width: 786px) {
    .wrapper {
      ul {
        display: flex;
        gap: 15px;
      }
    }
  }

  @media screen and (max-width: 660px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      .list-wrapper {
        width: inherit;
        ul {
          padding: 0 10px;
          border: none;
          justify-content: space-evenly;
          width: inherit;
          display: flex;
        }
      }

      .time {
        margin-right: 10px;
      }
    }
  }
`;
