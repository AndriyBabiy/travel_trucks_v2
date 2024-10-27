import NavButton from "../../Button/NavButton/NavButton";
import Icon from "../../Icon/Icon";
import ItemList from "../../ItemList/ItemList";
import LocationInfo from "../../LocationInfo/LocationInfo";
import ProductFeatures from "../../ProductFeatures/ProductFeatures";
import ReviewInfo from "../../ReviewInfo/ReviewInfo";
import css from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={css.container}>
      <img className={css.image} src={product.gallery[0].thumb}></img>
      <div className={css.productInfo}>
        <div className={css.infoHeader}>
          <div className={css.headerTop}>
            <h2 className={css.title}>{product.name}</h2>
            <div className={css.title_right}>
              <p className={css.title}>{`€${product.price}.00`}</p>
              <Icon
                iconId={"heart_inactive"}
                width={"26px"}
                height={"24px"}
              ></Icon>
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
