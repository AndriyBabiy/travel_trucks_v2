import { NavLink } from "react-router-dom";
import logo from "../../assets/TravelTrucksLogo.svg";
import css from "./NavBar.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const NavBar = () => {
  return (
    <div className={css.navBar}>
      <div className={css.content}>
        <img src={logo} className={css.logo} />
        <nav className={css.navLinks}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
