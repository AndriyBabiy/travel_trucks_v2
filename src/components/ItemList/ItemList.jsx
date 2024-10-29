import css from "./ItemList.module.css";

function ItemList({ children }) {
  return <ul className={css.container}> {children}</ul>;
}

export default ItemList;
