// import { useSelector } from "react-redux";
import css from "./ProductPageInfo.module.css";
// import { selectProducts } from "../../redux/selectors";
import ReviewInfo from "../ReviewInfo/ReviewInfo";
import LocationInfo from "../LocationInfo/LocationInfo";
import ImageCard from "../ImageCard/ImageCard";
import { Tab, Tabs } from "@mui/material";
import ItemList from "../ItemList/ItemList";
import ProductFeatures from "../ProductFeatures/ProductFeatures";
import BookingForm from "../BookingForm/BookingForm";
// import { useEffect, useState } from "react";

function ProductPageInfo({ product }) {
  // const products = useSelector(selectProducts);
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   if (products) {
  //     setProduct(products.filter(({ id }) => id === productId));
  //   }
  // }, [productId, products]);

  // setProductsRender(useSelector(selectProducts));

  // console.log(products);

  // setProduct(products.filter(({ id }) => id === productId));

  const vehicleDetails = [
    { label: "Form", value: "Panel truck" },
    { label: "Length", value: "5.4 m" },
    { label: "Width", value: "2.01 m" },
    { label: "Height", value: "2.05 m" },
    { label: "Tank", value: "132 I" },
    { label: "Consumption", value: "12.4l/100km" },
  ];

  return (
    <div>
      <div className={css.productBio}>
        <div className={css.header}>
          <div className={css.headerTitle}>
            <h2 className={css.title}>{product.name}</h2>
          </div>
          <div className={css.headerDetails}>
            <div className={css.headerGeneralDetails}>
              <ReviewInfo product={product} />
              <LocationInfo product={product} />
            </div>

            <div className={css.price}>
              <p className={css.title}>{`€${product.price}.00`}</p>
            </div>
          </div>
        </div>

        <div className={css.gallery}>
          {product.gallery.map(({ thumb }) => (
            <ImageCard key={thumb} image={thumb} />
          ))}
        </div>
        <div className={css.description}>{product.description}</div>
      </div>

      <div className={css.sectionToggle}>
        <Tabs defaultActiveTab="Features">
          <Tab label="Features">
            <div>Content for Tab 1</div>
          </Tab>
          <Tab label="Reviews">
            <div>Content for Tab 2</div>
          </Tab>
        </Tabs>
      </div>

      <div className={css.bottomSection}>
        <div className={css.productInfo}>
          <ItemList>
            <ProductFeatures
              product={product}
              className={css.ProductFeatures}
            />
          </ItemList>
          <div>
            <h3 className={css.listName}>Vehicle Details</h3>
            <hr className={css.lineBreak} />
            <ul className={css.detailsList}>
              {vehicleDetails.map((detail, index) => (
                <li key={index} className={css.listItem}>
                  <span>{detail.label}</span>
                  <span>{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}

export default ProductPageInfo;
