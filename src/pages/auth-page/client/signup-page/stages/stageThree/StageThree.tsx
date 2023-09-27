import { StageProps } from "../../utils/types";
import { StageWrapper } from "../stages-style";
import { ChangeEvent } from "react";

interface Props {
  handleInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  params: StageProps;
}

export const StageThree: React.FC<Props> = ({ handleInputs, params }) => {
  return (
    <StageWrapper>
      <div className="container">
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            onChange={handleInputs}
            defaultValue={params.state}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            onChange={handleInputs}
            defaultValue={params.country}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={handleInputs}
            defaultValue={params.city}
          />
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onChange={handleInputs}
            defaultValue={params.street}
          />
        </div>
        <div>
          <label htmlFor="houseNumber">House Number</label>
          <input
            type="text"
            id="houseNumber"
            onChange={handleInputs}
            defaultValue={params.houseNumber}
          />
        </div>
        <div>
          <label htmlFor="zip">Zip code</label>
          <input
            type="text"
            id="zip"
            onChange={handleInputs}
            defaultValue={params.zip}
          />
        </div>
      </div>
    </StageWrapper>
  );
};
