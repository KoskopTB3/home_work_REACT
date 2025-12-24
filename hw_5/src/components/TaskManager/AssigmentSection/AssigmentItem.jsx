import styles from './AssigmentSection.module.css';


function AssigmentItem({ id, title, onTaskDelete }) {
  function onDelete() {
    onTaskDelete(id);
  }

  return (
    <div className={styles.assigmentItemContainer}>
      <div>{title}</div>
      <div>
        <button onClick={onDelete}>X</button>
      </div>
    </div>
  );
}

export default AssigmentItem;
