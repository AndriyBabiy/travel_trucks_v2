import css from "./ItemList.module.css";

function ItemList({ children }) {
  return <div className={css.container}> {children}</div>;
}

export default ItemList;
