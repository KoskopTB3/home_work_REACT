import { useState, useEffect, useRef } from "react";
import styles from "./GuessTheNumber.module.css";

function Player({ id, currentPlayer, usedNums, userNum, usedPlayerNums }) {
  //   console.log(usedPlayerNums);

  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  function handleClick() {
    if (userInput.trim() === "") {
      setError("Введіть цифру!");
      return;
    }

    const inpValue = Number(userInput);
    console.log(inpValue);

    if (
      usedNums.includes(inpValue) ||
      inpValue < 0 ||
      inpValue > 9 ||
      isNaN(inpValue)
    ) {
      setError(
        "Це число вже використовувалось або недопустиме! Спробуйте інше."
      );
      return;
    }
    setError(null);

    userNum(inpValue, id);
    setUserInput("");
  }

  useEffect(() => {
    if (currentPlayer === id) inputRef.current?.focus();
  }, [currentPlayer, id]);

  return (
    <>
      <h3>Гравець {id}</h3>
      <div className={styles["player-input"]}>
        <label>
          Цифра:
          <input
            ref={inputRef}
            type="number"
            value={userInput}
            disabled={currentPlayer !== id}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
      </div>
      <div className={styles["player-button"]}>
        <button onClick={handleClick} disabled={currentPlayer !== id}>
          Зробити хід
        </button>
      </div>

      <div className={styles["used-user-nums"]}>
        {usedPlayerNums.length > 0
          ? `Використані цифри: ${usedPlayerNums.join(", ")}`
          : "Поки що немає цифр гравця"}
      </div>
      {error && <p className={styles["error-message"]}>{error}</p>}
    </>
  );
}

export default Player;
