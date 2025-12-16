import { useState } from "react";
import styles from "./Messenger.module.css";

function MessageItem({ message }) {
  const [isLikedCount, setIsLikedCount] = useState(0);
  const [isDislikeCount, setIsDislikeCount] = useState(0);

  function handleLikeClick() {
    setIsLikedCount((prevCount) => prevCount + 1);
  }

  function handleDislikeClick() {
    setIsDislikeCount((prevCount) => prevCount + 1);
  }

  if (!message) {
    return null;
  }
  return (
    <div className={styles["message-container"]}>
      <div className={styles["message-text"]}>{message}</div>
      <div className={styles["wrap-reactions-block"]}>
        <div className={styles["reactions-container"]}>
          <div className={styles["reaction-image"]} onClick={handleLikeClick}>
            <img src="https://cdn-icons-png.flaticon.com/512/889/889140.png" />
          </div>
          {isLikedCount !== 0 && <span>{isLikedCount}</span>}
        </div>
        <div className={styles["reactions-container"]}>
          <div
            className={styles["reaction-image"]}
            onClick={handleDislikeClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/889/889139.png

"
            />
          </div>
          {isDislikeCount !== 0 && <span>{isDislikeCount}</span>}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
