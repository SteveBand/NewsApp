import styled from "styled-components";

export const FavouritesPage = styled.section`
  display: flex;
`;

export const FavouritesWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz@10..48&display=swap");
  min-height: calc(100vh - 100px);
  width: 100%;
  padding: 10px 0;
  .container {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    position: relative;

    h1 {
      letter-spacing: 3px;
      font-size: 30px;
    }

    h2 {
      letter-spacing: 2px;
      color: #3f4254;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    /* .container {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    } */
  }
`;
