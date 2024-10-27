import css from "./HeroTextBox.module.css";
import NavButton from "../../Button/NavButton/NavButton";

function HeroTextBox() {
  return (
    <div className={css.textBox}>
      <div className={css.text}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.subtitle}>
          You can find everything you want in our catalog
        </h2>
      </div>

      <NavButton to="/catalog" variant={"home"}>
        View Now
      </NavButton>
    </div>
  );
}

export default HeroTextBox;
