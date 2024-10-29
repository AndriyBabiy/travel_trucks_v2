import Filters from "../../components/Sidebar/Sidebar";
import ProductList from "../../components/ProductList/ProductList";
import css from "./CatalogPage.module.css";
import { fetchProducts } from "../../redux/operations";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useMemo, useState } from "react";
import { selectProducts } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // const productsList = dispatch(useSelector(selectProducts));

  // const productList = useMemo(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       setIsLoading(true);
  //       setProducts(fetchProducts());
  //     } catch (e) {
  //       console.log(e);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  const products = useSelector(selectProducts);

  const [visibleItemCount, setVisibleItemCount] = useState(4);
  const [displayedData, setDisplayedData] = useState(
    products?.slice(0, visibleItemCount)
  );

  useEffect(() => {
    try {
      setIsLoading(true);
      setDisplayedData(products?.slice(0, visibleItemCount));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [visibleItemCount, products]);

  const handleLoadMore = () => {
    setVisibleItemCount((prevCount) => prevCount + 4);

    setDisplayedData(products.slice(0, visibleItemCount + 4));
  };

  console.log("products", displayedData);

  return (
    <div className={css.container}>
      <Filters />
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <ProductList products={displayedData} loadMore={handleLoadMore} />
      )}
    </div>
  );
};

export default CatalogPage;
