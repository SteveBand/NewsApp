import styled from "styled-components";

export const MenuWrapper = styled.article<{ $isMenu: boolean }>`
  position: absolute;
  z-index: 200;
  /* background-color: #eae8e8; */
  top: 40px;
  left: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  /* color: black; */
  letter-spacing: 1px;
  border-radius: 5px;
  min-width: 120px;
  transition: 200ms ease;
  transform: ${(prop) =>
    prop.$isMenu ? "translateY(0%)" : "translateY(-250%)"};

  p {
    cursor: pointer;
    transition: 200ms;
    width: 100%;
    padding: 10px 5px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    &:hover {
      background-color: #bab7b7;
    }
  }

  @media screen and (max-width: 465px) {
    left: 0.2vh;
  }
`;
