import Icons from "../../assets/icons.svg";
import PropTypes from "prop-types";

const Icon = ({ iconId, color, size = 32 }) => (
  <svg
    className={`icon icon-${iconId}`}
    fill={color}
    width={size}
    height={size}
  >
    <use xlinkHref={`${Icons}#icon-${iconId}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
