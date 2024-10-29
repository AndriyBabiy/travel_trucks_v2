import { PiEngine } from "react-icons/pi";
import { IoWarningOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.container}>
      <div>
        <IoWarningOutline />
        <PiEngine />
      </div>
      <div> 404 Error - Page not found</div>
      <NavLink to="/" className={styles.link}>
        Return to Homepage
      </NavLink>
    </div>
  );
}

export default ErrorPage;
