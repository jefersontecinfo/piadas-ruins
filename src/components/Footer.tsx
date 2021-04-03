import React from "react";
import styles from "./../styles/components/Footer.module.css";

export default function Footer(anotherJoke) {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <button className={styles.buttonStyle} onClick={() => anotherJoke}>
          <span>Manda outra!</span>
        </button>
      </div>
    </div>
  );
}
