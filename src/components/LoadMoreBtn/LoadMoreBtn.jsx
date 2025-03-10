import React from "react";
import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return <button className={styles.button} onClick={onClick}>Daha Fazla Yükle</button>;
}

export default LoadMoreBtn;