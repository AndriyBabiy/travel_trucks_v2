import css from "./ReviewInfo.module.css";
import Icon from "../Icon/Icon";

function ReviewInfo({ product }) {
  const getAvgRating = (arr) => {
    const len = arr.length;
    const sum = arr.reduce((total, next) => total + next.reviewer_rating, 0);

    return Math.round((sum / len) * 10) / 10;
  };

  return (
    <div className={css.container}>
      <Icon iconId={"star_active"} size={"16"} height={"16px"}></Icon>
      <p>{`${getAvgRating(product.reviews)}(${
        product.reviews.length
      } Reviews)`}</p>
    </div>
  );
}

export default ReviewInfo;
