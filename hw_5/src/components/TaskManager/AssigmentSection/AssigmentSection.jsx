import AssigmentCard from "./AssigmentCard";
import styles from "./AssigmentSection.module.css";

function AssigmentSection({ assigmentsList, onDeleteUserTask }) {
  console.log("assigmentsList");

  console.log(assigmentsList);

  

  return (
    <div className={styles.assigmentSectionContainer}>
      {assigmentsList?.length > 0 ? (
        assigmentsList.map((userAssigment, index) => (
          <AssigmentCard
            key={index}
            {...userAssigment}
            onDeleteUserTask={onDeleteUserTask}
          />
        ))
      ) : (
        <div>Список призначень порожній</div>
      )}
    </div>
  );
}

export default AssigmentSection;
