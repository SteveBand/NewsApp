import styled from "styled-components";

export const ContetPageWrapper = styled.section`
  width: 70%;
  min-height: calc(100vh - 100px);
  display: grid;
  box-sizing: border-box;
  flex: 10;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
