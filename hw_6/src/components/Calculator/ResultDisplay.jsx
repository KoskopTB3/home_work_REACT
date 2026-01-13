import { memo } from "react";
import styles from "./Calculator.module.css";

function ResultDisplay({ sum }) {
  console.log("------ResultDisplay-----");

  return <div className={styles.resultText}>Сума = {sum}</div>;
}

export default memo(ResultDisplay);
