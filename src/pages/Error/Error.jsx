import { PiEngine } from "react-icons/pi";
import { IoWarningOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <IoWarningOutline />
      <PiEngine />
      <div> 404 Error - Page not found</div>
      <NavLink to="/">Return to Homepage</NavLink>
    </>
  );
}

export default Error;
