import css from "./Sidebar.module.css";
import LocationInput from "./LocationInput/LocationInput";
import Filters from "./Filters/Filters";
import NavButton from "../Button/NavButton/NavButton";

function Sidebar() {
  return (
    <div className={css.container}>
      <LocationInput />
      <Filters />
      <NavButton>Search</NavButton>
    </div>
  );
}

export default Sidebar;
