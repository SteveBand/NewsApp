import { CategoriesWrapper } from "./categories-style";
import moment from "moment";
export const Categories = () => {
  const currentTime = Date.now();
  const time = moment(currentTime);
  return (
    <CategoriesWrapper>
      <article className="wrapper">
        <div className="time">
          <div className="upper">
            <h4>{time.format("MMMM")}</h4>
          </div>
          <div className="bottom">
            <p>{time.format("dddd")}</p>
            <p>{time.format("Do")}, </p>
            <p>{time.format("YYYY")}</p>
          </div>
        </div>
        <div className="list-wrapper">
          <ul>
            <li>NEWS</li>
            <li>SPORT</li>
            <li>TECHNOLOGY</li>
            <li>TRAVEL</li>
            <li>LIFESTYLE</li>
          </ul>
        </div>
      </article>
    </CategoriesWrapper>
  );
};
