import styled from "styled-components";

export const SearchbarWrapper = styled.article<{ $isactive: boolean }>`
  width: 100%;
  position: absolute;
  min-height: ${(prop) =>
    !prop.$isactive ? "0" : prop.$isactive ? "50px" : "0px"};
  left: 0px;
  top: 57px;
  z-index: 200;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 300ms ease-in-out;
  .article-wrapper {
    display: ${(prop) => (prop.$isactive ? "block" : "none")};
    width: 100%;
    padding: 10px 0;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-top: 1px solid gray;
  }

  @media screen and (max-width: 920px) {
    top: 43px;
  }
`;
