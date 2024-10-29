import { useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import css from "./ProductList.module.css";
import { selectProducts } from "../../redux/selectors";
import { useEffect, useState } from "react";
import NavButton from "../Button/NavButton/NavButton";

function ProductList() {
  const products = useSelector(selectProducts);

  const [visibleItemCount, setVisibleItemCount] = useState(4);
  const [displayedData, setDisplayedData] = useState(
    products?.slice(0, visibleItemCount)
  );

  useEffect(() => {
    setDisplayedData(products?.slice(0, visibleItemCount));
  }, [visibleItemCount, products]);

  const handleLoadMore = () => {
    setVisibleItemCount((prevCount) => prevCount + 4);

    setDisplayedData(products.slice(0, visibleItemCount + 4));
  };

  return (
    <div className={css.container}>
      {displayedData?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <NavButton onClick={handleLoadMore} variant={"loadMore"}>
        Load more
      </NavButton>
    </div>
  );
}

export default ProductList;
