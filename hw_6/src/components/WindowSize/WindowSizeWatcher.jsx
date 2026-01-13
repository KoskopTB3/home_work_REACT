import { useWindowSize } from "../CustomHooks/useWindowSize";
import styles from "./WindowSizeWatcher.module.css";

function WindowSizeWatcher() {
  const { width, height } = useWindowSize();

  let deviceIcon = "🖥️";
  let deviceText = "Монітор";

  if (width < 768) {
    deviceIcon = "📱";
    deviceText = "Телефон";
  } else if (width < 1024) {
    deviceIcon = "📱";
    deviceText = "Таблет";
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Розмір вікна</h2>

      <div className={styles.contentBlock}>
        <div className={styles.sizeDisplay}>
          {width} × {height} px
        </div>

        <div className={styles.deviceBlock}>
          <span className={styles.icon}>{deviceIcon}</span>
          <span>{deviceText}</span>
        </div>
      </div>

      <p className={styles.infoText}>Змінюйте розмір вікна для тестування</p>
    </div>
  );
}

export default WindowSizeWatcher;
