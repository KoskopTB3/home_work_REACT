import MessageItem from "./MessageItem";
import styles from "./Messenger.module.css";
import { useState } from "react";

function SentMessages({ messages }) {
  if (!messages || messages.length === 0) {
    return (
      <div className={styles["sent-messages-container"]}>
        <div className={styles["no-messages"]}>No messages yet</div>
      </div>
    );
  }

  return (
    <div className={styles["sent-messages-container"]}>
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
}

export default SentMessages;
