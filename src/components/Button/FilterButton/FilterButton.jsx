import Icon from "../../Icon/Icon";
import css from "./FilterButton.module.css";

function FilterButton({ name, iconId }) {
  return (
    <li>
      <button className={css.container}>
        <Icon iconId={iconId}></Icon>
        <p className={css.text}>{name}</p>
      </button>
    </li>
  );
}

export default FilterButton;
