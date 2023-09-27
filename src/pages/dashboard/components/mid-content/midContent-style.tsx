import styled from "styled-components";

export const MidContentWrapper = styled.section`
  box-sizing: border-box;
  padding: 0 0 80px 0;
  max-width: 100%;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  .articles-container {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
