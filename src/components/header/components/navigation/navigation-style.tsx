import styled from "styled-components";

export const NavigationWrapper = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  .icon {
    font-size: 25px;
    transition: 200ms ease-in-out;
    cursor: pointer;
    display: none;
    &:hover {
      scale: 1.2;
    }
  }

  ul {
    display: flex;
    list-style: none;
    gap: 10px;
    li {
      font-size: 17px;
      letter-spacing: 1px;
      transition: 200ms ease;
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        scale: 1.05;
      }
    }
  }

  @media screen and (max-width: 890px) {
    .icon {
      display: block;
    }
    ul {
      display: none;
    }
  }
`;
