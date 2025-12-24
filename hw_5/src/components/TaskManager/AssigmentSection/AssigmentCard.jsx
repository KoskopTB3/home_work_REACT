import AssigmentItem from "./AssigmentItem";
import styles from "./AssigmentSection.module.css";

function AssigmentCard({ userId, userName, userTasksList, onDeleteUserTask }) {
  function onTaskDelete(taskId) {
    onDeleteUserTask(userId, taskId);
  }
  return (
    <>
      {userTasksList?.length > 0 ? (
        <div className={styles.assigmentCardContainer}>
          <h2>
            Виконавець <br />
            {userName}
          </h2>
          {userTasksList.map((task) => (
            <AssigmentItem
              key={task.id}
              {...task}
              onTaskDelete={onTaskDelete}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AssigmentCard;
