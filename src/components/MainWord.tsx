import React, { useEffect, useState } from "react";
import styles from "./../styles/components/MainWord.module.css";

export default function MainWord(props) {
  const { joke } = props;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <span>{joke ? joke : "Procurando a melhor piada.."}</span>
      </div>
    </div>
  );
}
