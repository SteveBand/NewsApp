import React from "react";
import { SpinnerWrapper } from "./spinnerLoader-style";

export const SpinnerLoader = () => {
  return (
    <SpinnerWrapper className="loader-spinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerWrapper>
  );
};
