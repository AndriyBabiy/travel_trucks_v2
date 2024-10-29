// import { useState } from "react";
import styles from "./BookingForm.module.css";

function BookingForm() {
  // const [formSubmission, setformSubmission] = useState(false);
  // const handleFormSubmit = (e) => {
  // e.preventDefault();
  // setformSubmission(true);
  // };

  return (
    <form className={styles.bookingForm}>
      <h2 className={styles.formTitle}>Book your campervan now</h2>
      <p className={styles.formDescription}>
        Stay connected! We are always ready to help you.
      </p>

      <div>
        <label htmlFor="name" className={styles["visually-hidden"]}>
          Name
        </label>
        <input
          type="text"
          id="name"
          className={styles.formInput}
          placeholder="Name*"
          required
        />

        <label htmlFor="email" className={styles["visually-hidden"]}>
          Email
        </label>
        <input
          type="email"
          id="email"
          className={styles.formInput}
          placeholder="Email*"
          required
        />

        <label htmlFor="date" className={styles["visually-hidden"]}>
          Booking date
        </label>
        <input
          type="date"
          id="date"
          className={styles.formInput}
          placeholder="Booking date*"
          required
        />

        <label htmlFor="comment" className={styles["visually-hidden"]}>
          Comment
        </label>
        <textarea
          id="comment"
          className={styles.formInput}
          placeholder="Comment"
          rows="4"
        />
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        // onClick={handleFormSubmit}
      >
        Send
      </button>
      {/* {formSubmission && <p>Booking Submitted</p>} */}
    </form>
  );
}

export default BookingForm;
