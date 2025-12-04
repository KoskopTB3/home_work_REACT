import { useState } from "react";
import styles from "./translator.module.css";

function Translator({ wordData }) {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  function checkInputHandler() {
    if (inputValue.toLocaleLowerCase() === wordData.en.toLocaleLowerCase())
      setResult("ok");
    else setResult("error");
  }
  return (
    <>
      <div className={styles.taskContainer}>
        <div
          className={`${styles.containerItem} ${
            result === "ok" ? styles.ok : ""
          } ${result === "error" ? styles.error : ""}`}
        >
          <div className={styles.itemImage}>
            <img src={wordData.src} />
          </div>
          <h3 className={styles.wordEn}>{wordData.ua}</h3>
          <div className={styles.inputBlock}>
            <label>
              Ваш переклад
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <button onClick={checkInputHandler} className={styles.btn}>
              Перевірити
            </button>
          </div>
        </div>
        {result === "ok" && (
          <div className={styles.successText}>Добре. Молодець!</div>
        )}
        {result === "error" && (
          <div className={styles.errorText}>Невірно, спробуйте ще раз</div>
        )}
      </div>
    </>
  );
}

export default Translator;

// Задача 3. Елемент тренажера англійської. Виводимо зображення елемента і слово.
// Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!»
// (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).
