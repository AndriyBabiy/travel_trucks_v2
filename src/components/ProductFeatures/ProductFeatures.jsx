import Icon from "../Icon/Icon";
import css from "./ProductFeatures.module.css";

function ProductFeatures({ product }) {
  const getFeatures = (obj) => {
    let features = [];

    const elemsOfInterest = [
      "transmission",
      "AC",
      "bathroom",
      "kitchen",
      "TV",
      "radio",
    ];

    const capitalizeWord = (word) => {
      const firstLetter = word.charAt(0).toUpperCase();

      return firstLetter + word.slice(1);
    };

    const insertElement = (elem) => {
      features = [
        ...features,
        {
          name: capitalizeWord(elem),
          icon: elem.toLowerCase(),
        },
      ];
    };

    for (const info in obj) {
      if (elemsOfInterest.includes(info)) {
        if (info === "transmission" && obj[info] === "automatic") {
          insertElement(info);
        } else {
          insertElement(info);
        }
      }
    }

    return features;
  };
  return (
    product &&
    getFeatures(product).map(({ name, icon }) => (
      <div key={name} className={css.featureBadge}>
        <Icon iconId={icon} size={"20"} width={"20px"} height={"20px"}></Icon>
        <p className={css.badgeText}>{name}</p>
      </div>
    ))
  );
}

export default ProductFeatures;
