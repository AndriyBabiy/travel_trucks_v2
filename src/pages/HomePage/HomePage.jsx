import { useEffect } from "react";
import css from "./HompPage.module.css";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className={css.container}>
      <Hero />
    </div>
  );
};

export default HomePage;
