import { useState } from "react";
import styles from "./Competition.module.css";
import arrow_green from "../../assets/images/task_1_img/arrow_green.png";
import arrow_red from "../../assets/images/task_1_img/arrow_red.png";

function Competition({ sportsmansList }) {
  const [sportsmanAwaitingList, setSportsmanAwaitingList] =
    useState(sportsmansList);
  const [sportsmanInTeamList, setSportsmanInTeamList] = useState([]);

  const display = sportsmanInTeamList.length > 0;

  function movePlayer(sportsmanId, fromList, setFromList, addToList) {
    const curerentSportsman = fromList.find(
      (sportsman) => sportsman.id === sportsmanId
    );

    addToList((prevList) => [...prevList, curerentSportsman]);
    setFromList((prevAwaitingList) =>
      prevAwaitingList.filter((sportsman) => sportsman !== curerentSportsman)
    );
  }

  return (
    <div>
      <h2>Competition</h2>
      <div className={styles.container}>
        <div className={styles.sportsmanContainer}>
          <div>
            <h2>Загальний список</h2>
          </div>

          {!!sportsmansList &&
            sportsmanAwaitingList.map((sportsman) => (
              <div key={sportsman.id} className={styles.sportsmanCard}>
                <span>{sportsman.name}</span>
                <div className={styles.arrows}>
                  <img
                    src={arrow_green}
                    onClick={() =>
                      movePlayer(
                        sportsman.id,
                        sportsmanAwaitingList,
                        setSportsmanAwaitingList,
                        setSportsmanInTeamList
                      )
                    }
                  />
                </div>
              </div>
            ))}
        </div>

        {!display && (
          <h3 className={styles.emptyMessage}>Команда ще не набрана</h3>
        )}

        {!!display && (
          <div>
            <div className={styles.sportsmanContainer}>
              <h2>В команді</h2>
              {sportsmanInTeamList.map((sportsman) => (
                <div key={sportsman.id} className={styles.sportsmanCard}>
                  <span>{sportsman.name}</span>
                  <div className={styles.arrows}>
                    <img
                      src={arrow_red}
                      onClick={() =>
                        movePlayer(
                          sportsman.id,
                          sportsmanInTeamList,
                          setSportsmanInTeamList,
                          setSportsmanAwaitingList
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Competition;
