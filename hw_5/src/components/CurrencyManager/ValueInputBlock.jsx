import { useState } from "react";
import styles from './CurrencyManager.module.css'


function ValueInputBlock({getAmountMoney}) {
 const[inputValue,setInputValue] = useState('')
	
function handleInput(e) {
	const currentInpValue = e.target.value
	setInputValue(currentInpValue)
	getAmountMoney(currentInpValue)
}
 
	return ( 
		<div className={styles.valueInputBlock}>
			<h2>Валюта гривня UAH</h2>
			<div className={styles.inputBlock}>
				<label>Введіть суму:
					<input value = {inputValue} type="number" onInput={handleInput}/>
				</label>
			</div>
		</div>
	 );
}

export default ValueInputBlock;
