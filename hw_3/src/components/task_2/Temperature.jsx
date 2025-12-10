import { useState } from "react";
import styles from "./Temperature.module.css";

function Temperature() {
  const [temperature, setTemperature] = useState("");

  function handlerChangeTemperature(e) {
    setTemperature(e.target.value);
  }
// =======================
  //   const backgroundColor =
  //     temperature === ""
  //       ? ""
  //       : temperature < 0
  //       ? styles.white
  //       : temperature <= 10
  //       ? styles.blue
  //       : temperature <= 22
  //       ? styles.green
  //       : styles.red;
//   =======================

  function getBackgroundColor(temp) {
    if (temp === "") return styles.default;

    const numericTemp = Number(temp);

    if (numericTemp < 0) return styles.white;
    if (numericTemp <= 10) return styles.blue;
    if (numericTemp <= 22) return styles.green;
    return styles.red;
  }

  const backgroundColorResult = getBackgroundColor(temperature);

  return (
    <div>
      <h2>Temperature Component</h2>
      <div className={`${styles.container} ${backgroundColorResult}`}>
        <label>
          Введіть температуру
          <input
            type="number"
            value={temperature}
            onChange={handlerChangeTemperature}
          />
        </label>
      </div>
    </div>
  );
}

export default Temperature;
// ======================================
// З клавіатури вводиться температура. Змінювати колір фону у залежності від значення:
// ●	менше нуля – білий
// ●	від 0 до 10 – синій,
// ●	від 11 до 22 – зелений
// ●	вище 22 – червоний
// Реалізувати з класами і стилями.

