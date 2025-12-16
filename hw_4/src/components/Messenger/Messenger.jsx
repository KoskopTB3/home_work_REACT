import SentMessages from "./SentMessages";
import styles from "./Messenger.module.css";
import InputBlock from "./InputBlock";

import { useState } from "react";

function Messenger() {
	const[chatHistory, setChatHistory] = useState(()=>[]);
	console.log(chatHistory);
	

	function addMessageToChatHistory(input) {
	setChatHistory((prevHistory) => [...prevHistory, input]);
  }
  return (
    <div className={styles["messenger-container"]}>
      <SentMessages messages={chatHistory} />
		<InputBlock onAddMessage = {addMessageToChatHistory}/>
    </div>
  );
}

export default Messenger;
