import { useRef, useState, useEffect } from 'react';
import styles from './Messenger.module.css';

function InputBlock({onAddMessage}) {
const[inputValue, setInputValue] = useState('');
const inpRef = useRef(null);


function handleInputChange(e) {
	 setInputValue(e.target.value);
  }

  function handleAddMessage() {
	onAddMessage(inputValue);
	setInputValue('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleAddMessage();
    }
  }

   useEffect(() => {
    inpRef.current.focus();
  }, []);

	return (  

			<div className={styles['wrapper-input-block']}>
				<div className={styles['input-block']}>
					<input ref={inpRef} type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
				</div>
				<div>
					<button className={styles['send-button']} onClick={handleAddMessage}>Send</button>
				</div>
			</div>
	);
}

export default InputBlock;