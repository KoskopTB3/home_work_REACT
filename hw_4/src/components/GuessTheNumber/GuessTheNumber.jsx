import { useState } from "react";

import styles from "./GuessTheNumber.module.css";
import GuessedNums from "./GuessedNums";
import Player from "./Player";

import { secretNums } from "./SecretNums";

function GuessTheNumber() {
  console.log(secretNums);

  const [guessedNums, setGuessedNums] = useState([null, null, null]);
  const [numsPlayer_1, setNumsPlayer_1] = useState([]);
  const [numsPlayer_2, setNumsPlayer_2] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [usedNums, setUsedNums] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [looser, setLooser] = useState(null);

  function checkinTheProgress(inpValue, playerId) {
    if (gameOver) return;
    //додали в список використаних чисел
    setUsedNums((prevNums) => [...prevNums, inpValue]);

    //додали число в список ігрока
    if (playerId === 1)
      setNumsPlayer_1((prevPlayerNums) => [...prevPlayerNums, inpValue]);
    else setNumsPlayer_2((prevPlayerNums) => [...prevPlayerNums, inpValue]);

    //перевірити чи є вгадана цифра
    setGuessedNums((prevNums) => {
      const updated = prevNums.map((num, i) =>
        secretNums[i] === inpValue ? inpValue : num
      );

      // перевірка на кінець гри
      const isGameOver = updated.every((num) => num !== null);
      if (isGameOver) {
        setGameOver(true);
        setLooser(playerId);
      } else setCurrentPlayer((prevUser) => (prevUser === 1 ? 2 : 1)); //передали хід іншому гравцю

      return updated;
    });
  }

  return (
    <div className={styles["main-container"]}>
      <GuessedNums guessedNums={guessedNums} />
      <div className={styles["main-player-container"]}>
        <div
          className={`${styles["player-container"]} ${
            currentPlayer === 1 ? styles.active : ""
          }`}
        >
          <Player
            id={1}
            currentPlayer={currentPlayer}
            usedNums={usedNums}
            userNum={checkinTheProgress}
            usedPlayerNums={numsPlayer_1}
          />
          {looser === 1 && (
            <div className={styles["looser-container"]}>
              Програв гравець {looser}
            </div>
          )}
        </div>
        <div
          className={`${styles["player-container"]} ${
            currentPlayer === 2 ? styles.active : ""
          }`}
        >
          <Player
            id={2}
            currentPlayer={currentPlayer}
            usedNums={usedNums}
            userNum={checkinTheProgress}
            usedPlayerNums={numsPlayer_2}
          />
          {looser === 2 && (
            <div className={styles["looser-container"]}>
              Програв гравець {looser}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GuessTheNumber;
