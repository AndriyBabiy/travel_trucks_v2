import css from "./LocationInfo.module.css";
import Icon from "../Icon/Icon";

function LocationInfo({ product }) {
  return (
    <div className={css.container}>
      <Icon iconId={"map"} size={"16"} width={"16px"} height={"16px"}></Icon>
      <p>{product.location}</p>
    </div>
  );
}

export default LocationInfo;
