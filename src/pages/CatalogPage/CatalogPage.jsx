import Filters from "../../components/Sidebar/Sidebar";
import ProductList from "../../components/ProductList/ProductList";
import css from "./CatalogPage.module.css";
import { fetchProducts } from "../../redux/operations";
import { useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // const productsList = dispatch(useSelector(selectProducts));

  const productList = useMemo(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setProducts(fetchProducts());
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log("productList", productList);
  console.log("products", products);

  return (
    <div className={css.container}>
      <Filters />
      {isLoading ? <ProductList /> : <ProductList />}
    </div>
  );
};

export default CatalogPage;
