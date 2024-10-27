import clsx from "clsx";
import "./Heading.css";

function Heading({ variant, children }) {
  return <p className={clsx("heading", variant)}>{children}</p>;
}

export default Heading;
