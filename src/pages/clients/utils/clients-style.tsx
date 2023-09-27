import styled from "styled-components";

export const ClientsWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  width: 100%;
  min-height: 100vh;
  .container {
    display: flex;
    margin: 0 auto;
  }

  .clients-container {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 50px 10%;
    margin: 0 auto;
    gap: 30px;
    height: fit-content;
    .client-wrapper {
      display: flex;
      flex-direction: column;
      flex: 1;
      flex-grow: 400px;

      height: 100px;
      border-radius: 10px;
      padding: 20px;
      border: 1px solid #c5c4c4b3;
      cursor: pointer;
      transition: 200ms ease;
      max-width: 400px;
      min-width: 200px;
      .img-container {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: rgba(0, 0, 0, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2;
        .icon {
          height: 70px;
          width: 100%;
        }
      }

      .content {
        text-align: center;
        letter-spacing: 1px;
        flex: 1;
      }

      &:hover {
        scale: 1.05;
      }
    }
  }
`;
