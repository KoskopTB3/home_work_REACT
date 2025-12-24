import { useState } from "react";
import { tasks, employeesList } from "../data/tasksDevider";
import AssigmentSection from "./AssigmentSection/AssigmentSection";
import AssigmentSelectSection from "./AssigmentSelectSection/AssigmentSelectSection";
import styles from "./TaskManager.module.css";

function TaskManager() {
  const [assigments, setAssigments] = useState(() => ({}));

  //що отримує assigments
  //   assigments = {
  //     101: [1],
  //     102: [3, 4],
  //   };

  function getSelectData(taskId, newWorkerId) {
    setAssigments((prev) => {
      const next = {};

      // видалити задачу у всіх робітників
      for (const workerId in prev) {
        const tasks = prev[workerId].filter((id) => id !== taskId);
        if (tasks.length > 0) {
          next[workerId] = tasks;
        }
      }

      // призначити новому
      next[newWorkerId] = [...(next[newWorkerId] || []), taskId];

      return next;
    });
  }

  console.log(assigments);

  //формувач обєкта
  function getAssigmentObj(userId, userTaskIds) {
    const user = employeesList.find((user) => user.id == userId);
    const tasksList = userTaskIds.map((taskId) =>
      tasks.find((task) => task.id == taskId)
    );
    return {
      userId: user.id,
      userName: user.name,
      userTasksList: tasksList,
    };
  }

  //формувач масиву обєктів
  function getAssigmentList() {
    return Object.keys(assigments).map((userId) =>
      getAssigmentObj(userId, assigments[userId])
    );
  }

  //переформатуємо 102: [3, 4] в звичні дані прицівника і його задач
  const assigmentsList = getAssigmentList();

  // мапа taskId -> userId (щоб знати, який worker обраний для задачі)
  const taskToWorkerMap = {};
  for (const userId in assigments) {
    // assigments[userId] - це [3, 4] індексів задач
    assigments[userId].forEach((taskId) => {
      taskToWorkerMap[taskId] = Number(userId);
      //{               3:              101}
    });
  }

  console.log(taskToWorkerMap); // {1: 101, 4: 104}

  //видалення задачі у працівника
  function onDeleteUserTask(userId, taskId) {
    setAssigments((prev) => ({
      ...prev,
      [userId]: prev[userId].filter((id) => id !== taskId),
    }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Task Manager</h3>
        <div className={styles.controls}>
          <div className={styles.note}>Tasks: {tasks.length}</div>
        </div>
      </div>

      <div className={styles.columns}>
        <div className={styles.leftPanel}>
          <AssigmentSelectSection
            tasks={tasks}
            employeesList={employeesList}
            getSelectData={getSelectData}
            taskToWorkerMap={taskToWorkerMap}
          />
        </div>

        <aside className={styles.rightPanel}>
          <AssigmentSection
            assigmentsList={assigmentsList}
            onDeleteUserTask={onDeleteUserTask}
          />
        </aside>
      </div>
    </div>
  );
}

export default TaskManager;
