import styles from "./BulletedList.module.css";

function BulletedList({workersList}) {
	return ( 
		<>
		<div className={styles.taskContainer}>
			{workersList&&(
				<ul>
					{workersList.map(worker=>
					<li key={worker.id} className={styles.color}>{worker.name} - {worker.salary}</li>
					)}
					</ul>)}

			
		</div>
		</>
	 );
}

export default BulletedList;