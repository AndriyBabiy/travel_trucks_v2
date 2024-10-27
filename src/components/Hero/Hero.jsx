import css from "./Hero.module.css";
import HeroTextBox from "./HeroTextBox/HeroTextBox";

function Hero() {
  return (
    <div className={css.container}>
      <HeroTextBox />
    </div>
  );
}

export default Hero;
