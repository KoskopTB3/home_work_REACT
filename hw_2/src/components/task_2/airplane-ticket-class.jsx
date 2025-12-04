// Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо
// 1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают
// 2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.

import { useState } from "react";
import styles from "./airplane-ticket.module.css";

function AirplaneTicketClass() {
  const [ticketClass, setTicketClass] = useState(null);
  const [whishCognac, setWhishCognac] = useState(false);

  function choiceTicket(e) {
    setTicketClass(e.target.value);
    setWhishCognac(false);
  }


  const containerClass = `
	${styles.containerItem}
	${ticketClass === "businesClass" ? styles.businesClass : ""}
	${ticketClass === "economClass" ? styles.economClass : ""}`;

  return (
    <div className={containerClass}>
      <h2 className={styles.titleH2}>Виберіть клас квитка</h2>
      <select
        name="ticketClass"
        onChange={choiceTicket}
        className={styles.select}
      >
        <option value="">-- Оберіть клас квитка--</option>
        <option value="businesClass">Бізнес клас</option>
        <option value="economClass">Економ клас</option>
      </select>

      {/* якщо бізнес клас */}

      {ticketClass === "businesClass" && (
        <>
          <div className={styles.options}>
            <h3 className={styles.optionsTitle}>На Ваш вибір</h3>
            <label className={styles.optionLabel}>
              Газета
              <input type="checkbox" />
            </label>
            <label className={styles.optionLabel}>
              Коньяк
              <input
                type="checkbox"
                onChange={(e) => setWhishCognac(e.target.checked)}
              />
            </label>
          </div>

          {!!whishCognac && (
            <div className={styles.snack}>
              <h3 className={styles.optionsTitle} style={{ margin: 0 }}>
                Хочете закуску
              </h3>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  id="option1"
                  name="myOption"
                  value="value1"
                />{" "}
                Так
              </label>

              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  id="option2"
                  name="myOption"
                  value="value2"
                />{" "}
                Ні
              </label>
            </div>
          )}
        </>
      )}

      {/* якщо економ клас */}
      {ticketClass === "economClass" && (
        <div className={styles.options}>
          <h3 className={styles.optionsTitle}>На Ваш вибір</h3>
          <label className={styles.optionLabel}>
            Пиво
            <input type="checkbox" />
          </label>
          <label className={styles.optionLabel}>
            Чіпси
            <input type="checkbox" />
          </label>
        </div>
      )}
    </div>
  );
}

export default AirplaneTicketClass;
