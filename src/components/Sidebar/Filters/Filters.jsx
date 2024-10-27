import Filter from "./Filter/Filter";
import Heading from "../Heading/Heading";
import css from "./Filters.module.css";
import { filterOptions } from "../../../assets/filterOptions";

function Filters() {
  return (
    <div className={css.container}>
      <Heading>Filters</Heading>
      {filterOptions.map(({ name, items }) => (
        <Filter key={name} group={name} items={items} />
      ))}
    </div>
  );
}

export default Filters;
