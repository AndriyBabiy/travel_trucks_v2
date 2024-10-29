import { useState } from "react";
import NavButton from "../../Button/NavButton/NavButton";
import Icon from "../../Icon/Icon";
import ItemList from "../../ItemList/ItemList";
import LocationInfo from "../../LocationInfo/LocationInfo";
import ProductFeatures from "../../ProductFeatures/ProductFeatures";
import ReviewInfo from "../../ReviewInfo/ReviewInfo";
import css from "./ProductCard.module.css";

function ProductCard({ product }) {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className={css.container}>
      <img className={css.image} src={product.gallery[0].thumb}></img>
      <div className={css.productInfo}>
        <div className={css.infoHeader}>
          <div className={css.headerTop}>
            <h2 className={css.title}>{product.name}</h2>
            <div className={css.title_right}>
              <p className={css.title}>{`€${product.price}.00`}</p>
              <button onClick={handleFavorite}>
                {favorite ? (
                  <Icon iconId={"heart_active"} size={"26"}></Icon>
                ) : (
                  <Icon iconId={"heart_inactive"} size={"26"}></Icon>
                )}
              </button>
            </div>
          </div>
          <div className={css.headerBottom}>
            <ReviewInfo product={product} />
            <LocationInfo product={product} />
          </div>
        </div>
        <div className={css.description}>{product.description}</div>
        <ItemList>
          <ProductFeatures product={product} />
        </ItemList>
        <div className={css.cardButton}>
          <NavButton to={`/catalog/${product.id}`}>Show more</NavButton>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
