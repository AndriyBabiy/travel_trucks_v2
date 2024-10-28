import styles from "./CamperVanDetails.module.css";
import { FeatureTag } from "./FeatureTag";
import { BookingForm } from "./BookingForm";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/b4f69dd95adfee7e7f0768c79a22de6c1309409ce5442de9f2046b7cde949f29?apiKey=9a3ebf009f784226b3a4ecf10d407911&",
    text: "Automatic",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/881cd539f7dfc3d01446500a72c14ba18de2cacd861d66d463c1d1b0fc31c889?apiKey=9a3ebf009f784226b3a4ecf10d407911&",
    text: "AC",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/b310f4d33d483f741aad422201fb7f1eb3ae6ccf40ac52bbf19d8c03b80ae8d8?apiKey=9a3ebf009f784226b3a4ecf10d407911&",
    text: "Petrol",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/905df28bfea178022f7bfce18e6dd0c24e1a7caea3b8b8536fea5e9112aa34cd?apiKey=9a3ebf009f784226b3a4ecf10d407911&",
    text: "Kitchen",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/4a8f2a2af39b087b462a1b22d30654b127378ba6fcec712ef70f8940ec2ca6af?apiKey=9a3ebf009f784226b3a4ecf10d407911&",
    text: "Radio",
  },
];

const vehicleDetails = [
  { label: "Form", value: "Panel truck" },
  { label: "Length", value: "5.4 m" },
  { label: "Width", value: "2.01 m" },
  { label: "Height", value: "2.05 m" },
  { label: "Tank", value: "132 I" },
  { label: "Consumption", value: "12.4l/100km" },
];

export const CamperVanDetails = () => (
  <main className={styles.container}>
    <section className={styles.titleSection}>
      <h1 className={styles.mainTitle}>Mavericks</h1>
      <div className={styles.infoContainer}>
        <button className={styles.reviewButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/f3f1351c7496d1e28ad57928828bf83492c7ffa5573650a10c23ecdefe0ac166?apiKey=9a3ebf009f784226b3a4ecf10d407911&"
            alt=""
            className={styles.icon}
          />
          4.4(2 Reviews)
        </button>
        <div className={styles.locationButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/d33892a42e08b14efbb6cdbf74a9decbbd32d6b251810373b7f95d3ce4819660?apiKey=9a3ebf009f784226b3a4ecf10d407911&"
            alt=""
            className={styles.icon}
          />
          <span>Kyiv, Ukraine</span>
        </div>
      </div>
      <p className={styles.price}>€8000.00</p>
    </section>

    <section className={styles.imageGallery}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/d1deb9a257595b33def1e3cb8a942b084612cbecab0e1536f4129284bd7a0226?apiKey=9a3ebf009f784226b3a4ecf10d407911&"
        alt="Campervan exterior"
        className={styles.galleryImage}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/c2cf77b6018ead6833fc79fade185f4cf0c94bda769f2974dc507a51b9c0a764?apiKey=9a3ebf009f784226b3a4ecf10d407911&"
        alt="Campervan interior"
        className={styles.galleryImage}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/e0e849f51ab41b84d00ba2ed2d8b60a6f8bd36cddb4e87e13f0f2fd418877435?apiKey=9a3ebf009f784226b3a4ecf10d407911&"
        alt="Campervan features"
        className={styles.galleryImage}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/9a3ebf009f784226b3a4ecf10d407911/2d21a64d34fb90e47c5098fb33dbf65dfd3d7064724e247c0e0cfd788217b39f?apiKey=9a3ebf009f784226b3a4ecf10d407911&"
        alt="Campervan overview"
        className={styles.galleryImage}
      />
    </section>

    <p className={styles.description}>
      Embrace simplicity and freedom with the Mavericks panel truck, an ideal
      choice for solo travelers or couples seeking a compact and efficient way
      to explore the open roads. This no-frills yet reliable panel truck offers
      the essentials for a comfortable journey, making it the perfect companion
      for those who value simplicity and functionality.
    </p>

    <section>
      <div>
        {features.map((feature, index) => (
          <FeatureTag key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>

      <div>
        {vehicleDetails.map((detail, index) => (
          <div key={index}>
            <span>{detail.label}</span>
            <span>{detail.value}</span>
          </div>
        ))}
      </div>
    </section>

    <BookingForm />
  </main>
);
