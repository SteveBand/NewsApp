import React, { ChangeEvent, ChangeEventHandler } from "react";
import { StageWrapper } from "../stages-style";
import { StageProps } from "../../utils/types";

interface Props {
  handleInputs: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  params: StageProps;
  errors: {
    phone?: string;
  };
}

export const StageTwo: React.FC<Props> = ({ handleInputs, params, errors }) => {
  return (
    <StageWrapper>
      <div className="container">
        <div>
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            id="MiddleName"
            onChange={handleInputs}
            defaultValue={params.middleName}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone *</label>
          <input
            type="text"
            id="phone"
            onChange={handleInputs}
            defaultValue={params.phone}
          />
          {errors.phone ? <p className="error">{errors.phone}</p> : ""}
        </div>
        <div>
          <label htmlFor="imgUrl">Image Url</label>
          <input
            id="imgUrl"
            type="text"
            onChange={handleInputs}
            defaultValue={params.imgUrl}
          />
        </div>
        <div>
          <label htmlFor="imgAlt">Image Alt</label>
          <input
            type="text"
            id="imgAlt"
            onChange={handleInputs}
            defaultValue={params.imgAlt}
          />
        </div>
        <div>
          <label htmlFor="clientType">Client Type</label>
          <select id="clientType" onChange={handleInputs}>
            <option>Client</option>
            <option>Business</option>
          </select>
        </div>
      </div>
    </StageWrapper>
  );
};
