import css from "./ImageCard.module.css";

function ImageCard({ key, image }) {
  return <img key={key} className={css.image} src={image}></img>;
}

export default ImageCard;
