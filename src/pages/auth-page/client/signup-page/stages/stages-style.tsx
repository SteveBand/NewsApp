import styled from "styled-components";

export const StageWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Phudu:wght@300&display=swap");
  height: inherit;
  padding: 10px;
  div.container {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: inherit;

    & > div {
      label {
        display: block;
        text-align: center;
        margin-bottom: 10px;
        letter-spacing: 1.5px;
      }
      input {
        width: 100%;
        height: 20px;
        outline: none;
        background-color: transparent;
        border: 1px solid gray;
        padding: 0 5px;
        letter-spacing: 2px;
        border-radius: 5px;
      }

      select {
        background-color: transparent;
        outline: none;
        width: 100px;
        padding: 2px 5px;
      }
    }
  }
`;
