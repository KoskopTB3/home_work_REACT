import { useState } from "react";
import ResultDisplay from "./ResultDisplay";
import { useMemo } from "react";
import { useId } from "react";
import styles from "./Calculator.module.css";

function Сalculator() {
  console.log("------Calculator-----");

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [counter, setCounter] = useState(0);
  const num1Id = useId();
  const num2Id = useId();

  function handleChangeCounter() {
    setCounter((prevNum) => prevNum + 1);
  }

  const sum = useMemo(() => {
    return num1 + num2;
  }, [num1, num2]);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Калькулятор додавання</h2>

      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor={num1Id} className={styles.label}>
            Число 1
          </label>
          <input
            className={styles.input}
            type="number"
            id={num1Id}
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={num2Id} className={styles.label}>
            Число 2
          </label>
          <input
            className={styles.input}
            type="number"
            id={num2Id}
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </div>
      </div>

      <div className={styles.result}>
        <ResultDisplay sum={sum} />
      </div>

      <div className={styles.counterBlock}>
        <div>Незалежна кнопка</div>
        <button className={styles.counterBtn} onClick={handleChangeCounter}>
          {counter}
        </button>
      </div>
    </div>
  );
}

export default Сalculator;
