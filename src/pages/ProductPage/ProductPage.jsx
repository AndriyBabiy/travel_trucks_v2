import { useParams } from "react-router-dom";
import css from "./ProductPage.module.css";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import ProductPageInfo from "../../components/ProductPageInfo/ProductPageInfo";
// import { fetchProducts } from "../../redux/operations";
import data from "../../../public/data.json";
// import { CamperVanDetails } from "../../components/CamperVanDetails/CamperVanDetails";

const ProductPage = () => {
  const { id: productId } = useParams();

  const product = data.items.filter(({ id }) => id === productId)[0];

  // const product = useEffect(() => {
  //   dispatch(fetchProducts());
  // dispatch(selectProduct(productId));
  // }, [dispatch, productId]);

  // const products = useSelector(selectProducts);
  // const [product, setProduct] = useState(null);

  // console.log(products);

  // setProduct(products.filter(({ id }) => id === productId));

  // setProduct(useSelector(selectProduct(productId)));
  // useEffect(() => {
  //   if (product && productId === product.id) {
  //     return;
  //   }

  //   // setProduct(useSelector(selectProduct(productId)));
  // }, [productId, product]);

  // console.log(products, product);

  return (
    <div className={css.container}>
      <ProductPageInfo product={product} />
    </div>
  );
};

export default ProductPage;
