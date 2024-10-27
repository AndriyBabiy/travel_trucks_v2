import clsx from "clsx";
import { Link } from "react-router-dom";
import "./NavButton.css";

const NavButton = ({ to, onClick, variant, children }) => {
  return (
    <Link to={to} onClick={onClick} className="container">
      <button className={clsx("button", variant)}>{children}</button>
    </Link>
  );
};

export default NavButton;
