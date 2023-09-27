import React, { ChangeEvent } from "react";
import { StageWrapper } from "../stages-style";
import { StageProps } from "../../utils/types";

interface Props {
  handleInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  params: StageProps;
  errors: {
    userName?: string;
    password?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
  };
}

export const StageOne: React.FC<Props> = ({ handleInputs, params, errors }) => {
  return (
    <StageWrapper>
      <div className="container">
        <div>
          <label htmlFor="userName">Username *</label>
          <input
            type="text"
            id="userName"
            onChange={handleInputs}
            defaultValue={params.userName}
          />
          {errors.userName ? <p>{errors.userName}</p> : ""}
        </div>
        <div>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            onChange={handleInputs}
            defaultValue={params.password}
          />
          {errors.password ? <p>{errors.password}</p> : ""}
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            onChange={handleInputs}
            defaultValue={params.email}
          />
          {errors.email ? <p>{errors.email}</p> : ""}
        </div>
        <div>
          <label htmlFor="firstName">First name *</label>
          <input
            type="text"
            id="firstName"
            onChange={handleInputs}
            defaultValue={params.firstName}
          />
          {errors.firstName ? <p>{errors.firstName}</p> : ""}
        </div>
        <div>
          <label htmlFor="lastName">Last name *</label>
          <input
            type="text"
            id="lastName"
            onChange={handleInputs}
            defaultValue={params.lastName}
          />
          {errors.lastName ? <p>{errors.lastName}</p> : ""}
        </div>
      </div>
    </StageWrapper>
  );
};
