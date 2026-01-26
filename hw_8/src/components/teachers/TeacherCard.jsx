import styles from "./TeacherCard.module.css";
function TeacherCard({ teacher, onSelect, isSelected, onEdit, onDelete }) {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <img src={teacher.photo} alt="teacher" />
        <div>
          <div>{teacher.name}</div>
          <div>{teacher.subject}</div>
        </div>
      </div>
      <div className={styles.section2}>
        {onSelect ? (
          <button onClick={() => onSelect(teacher.id)}>
            {isSelected ? "Is selected" : "Select"}
          </button>
        ) : null}
      </div>

       {(onEdit || onDelete) && (
        <div className={styles.section2}>
          {onEdit && (
            <button onClick={() => onEdit(teacher.id)}>
              Редагувати
            </button>
          )}
          {onDelete && (
            <button onClick={() => onDelete(teacher.id)}>
              Видалити
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default TeacherCard;
