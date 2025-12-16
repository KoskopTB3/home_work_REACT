import styles from './GuessTheNumber.module.css';

function GuessedNums({ guessedNums }) {
	return (
		<div className={styles["guessed-nums"]}>
			{guessedNums.map((_, index) => (
				<div key={index} className={styles["guessed-num"]}>{guessedNums[index]===null ? " " : guessedNums[index]}</div>
			))}
		</div>
	);
}

export default GuessedNums;