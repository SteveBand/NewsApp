import styled from "styled-components";

export const SearchbarWrapper = styled.article<{ $isactive: boolean }>`
  width: 100%;
  position: absolute;
  min-height: ${(prop) =>
    !prop.$isactive ? "0" : prop.$isactive ? "50px" : "0px"};
  background-color: #e0dfdf;
  padding: 0;
  left: 0px;
  top: 57px;
  z-index: 200;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 300ms ease-in-out;
  .article-wrapper {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: #3f4254;
      color: white;
    }
  }
`;
