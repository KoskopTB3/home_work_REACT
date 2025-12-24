import TaskSelector from "./TaskSelector";
import styles from "./AssigmentSelectSection.module.css";

function AssigmentSelectSection({
  tasks,
  employeesList,
  getSelectData,
  taskToWorkerMap = {},
}) {
  return (
    <div className={styles.assigmentSelectSectionContainer}>
      <h2>Розподілювач задач</h2>
      {tasks?.length > 0 ? (
        tasks.map((task, index) => (
          <TaskSelector
            key={index}
            taskId={task.id}
            taskTitle={task.title}
            employeesList={employeesList}
            getSelectData={getSelectData}
            selectedWorkerId={taskToWorkerMap?.[task.id] ?? 0}
				// taskToWorkerMap= {1: 101, 4: 104} наприклад
				//  якщо в taskToWorkerMap є 1 то selectedWorkerId=101, якщо ні буде 0                
          />
        ))
      ) : (
        <div>Список задач порожній</div>
      )}
    </div>
  );
}

export default AssigmentSelectSection;
