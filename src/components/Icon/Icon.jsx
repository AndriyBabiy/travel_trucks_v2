const Icon = ({
  iconId,
  width = 32,
  height = 32,
  fill,
  stroke,
  onClick,
  className,
}) => (
  <svg
    width={width}
    height={height}
    onClick={onClick}
    className={className}
    fill={fill}
    stroke={stroke}
  >
    <use href={`./src/assets/icons.svg#icon-${iconId}`} />
  </svg>
);

export default Icon;
