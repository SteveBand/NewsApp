import React from "react";
import { SpinnerWrapper } from "./spinnerLoader-style";

export const SpinnerLoader = () => {
  return (
    <SpinnerWrapper>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerWrapper>
  );
};
