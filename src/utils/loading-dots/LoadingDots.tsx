import React from "react";
import { LoadingWrapper } from "./loadingDots-style";

export const LoadingDots: React.FC<Props> = ({ isActive }) => {
  return (
    <LoadingWrapper $isactive={isActive}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingWrapper>
  );
};

interface Props {
  isActive: boolean;
}
