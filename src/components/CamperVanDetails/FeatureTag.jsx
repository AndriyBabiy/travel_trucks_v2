import styles from "./CamperVanDetails.module.css";

export const FeatureTag = ({ icon, text }) => (
  <div className={styles.featureTag}>
    <img src={icon} alt="" className={styles.featureIcon} />
    <span>{text}</span>
  </div>
);
