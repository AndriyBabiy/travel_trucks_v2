import FilterButton from "../../../Button/FilterButton/FilterButton";
import ItemList from "../../../ItemList/ItemList";
import css from "./Filter.module.css";

function Filter({ group, items }) {
  return (
    <div className={css.container}>
      <h3 className={css.filterHeading}>{group}</h3>
      <hr />
      <ItemList>
        {items.map(({ name, icon }) => (
          <FilterButton key={name} name={name} iconId={icon} />
        ))}
      </ItemList>
    </div>
  );
}

export default Filter;
