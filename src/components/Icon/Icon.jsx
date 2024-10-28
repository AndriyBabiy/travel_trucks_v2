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

// const Icon = ({
//   iconId,
//   width = 32,
//   height = 32,
//   fill,
//   stroke,
//   onClick,
//   className,
// }) => (
//   <svg
//     width={width}
//     height={height}
//     onClick={onClick}
//     className={className}
//     fill={fill}
//     stroke={stroke}
//   >
//     <use href={`./src/assets/icons.svg#icon-${iconId}`} />
//   </svg>
// );

// export default Icon;
