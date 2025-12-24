import styles from "./AssigmentSelectSection.module.css";

function TaskSelector({
  taskId,
  taskTitle,
  employeesList,
  getSelectData,
  selectedWorkerId = 0,
}) {
  function onSelect(e) {
    const val = Number(e.target.value);
    if (val === 0) return;
    getSelectData(taskId, val);
  }

  const updatedEmployeesList = [
    {
      id: 0,
      name: "Виберіть виконавця",
    },
    ...employeesList,
  ];

  return (
    <div className={styles.taskSelector}>
      <div>{taskTitle}</div>
      <div>
        {/* наприклад selectedWorkerId = 101, автоматично буде вибраний робітник з співпадаючим option value='101', якщо такого нема по замовчуванням буде value=0 */}
        <select onChange={onSelect} value={String(selectedWorkerId)}>
          {updatedEmployeesList.map((worker, index) => (
            <option key={index} value={String(worker.id)}>
              {worker.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TaskSelector;
