import Icon from "../../Icon/Icon";
import Heading from "../Heading/Heading";
import css from "./LocationInput.module.css";

function LocationInput() {
  return (
    <div className={css.container}>
      <Heading variant={"Gray"}>Location</Heading>
      <div className={css.locationSearchBar}>
        <Icon
          iconId={"map"}
          width={20}
          fill={"#050505"}
          stroke={"#050505"}
          height={20}
        ></Icon>
        <input type="text" name="Location" className={css.textInput} />
      </div>
    </div>
  );
}

export default LocationInput;
