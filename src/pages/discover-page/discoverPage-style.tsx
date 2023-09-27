import styled from "styled-components";

export const DiscoverPageWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  .content {
    text-align: center;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: auto;
    flex-direction: column;
    gap: 20px;
    .searchbar-wrapper {
      padding: 30px 40px;
      height: max-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      p:first-child {
        left: 5%;
        font-size: 30px;
        color: #e2e0e0;
        letter-spacing: 3px;
      }

      p:last-child {
        right: 5%;
        letter-spacing: 2px;
        font-size: 20px;
        color: #e2e0e0;
        cursor: pointer;
        transition: 200ms ease;
        &:hover {
          scale: 1.05;
        }
      }

      input {
        width: 30%;
        max-width: 350px;
        min-width: 220px;
        height: 30px;
        padding: 10px 5px;
        outline: none;
        border: none;
        border-radius: 5px;
        color: #c2c1c1;
      }
    }
    .cards-container {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      transition: 200ms ease;
      padding: 10px 0 40px 0;
    }

    .loading-container {
      min-height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      .searchbar-wrapper {
        padding: 30px 5px;
        justify-content: space-between;
        p:first-child {
          font-size: 17px;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .content {
      .searchbar-wrapper {
        p:first-child {
          display: none;
        }
      }
      .cards-container {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
