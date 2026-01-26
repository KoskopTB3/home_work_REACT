import { useEffect, useState } from "react";
import useTeachersApi from "../../hooks/useTeachersApi";
import TeacherCard from "../../components/teachers/TeacherCard";
import { useNavigate } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import styles from "./TeachersList.module.css";
import axios from "axios";
import apiRoutes from "../../api/apiRoutes";

function TeachersList() {
  const {
    data: teachersList,
    isLoading,
    error,
    fetchTeachers,
  } = useTeachersApi();
  const [selectedTeachersIdList, setSelectedTeachersIdList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  const onSelect = (teacherId) => {
    if (selectedTeachersIdList.includes(teacherId)) {
      setSelectedTeachersIdList((prev) =>
        prev.filter((id) => id !== teacherId),
      );
    } else setSelectedTeachersIdList((prev) => [...prev, teacherId]);
  };

  const gotoMeetings = () => {
    const teachersListForMeetings = teachersList.filter((teacher) =>
      selectedTeachersIdList.includes(teacher.id),
    );
    navigate(frontRoutes.navigate.meetings, {
      state: {
        teachersListForMeetings,
      },
    });
  };

  const onEdit = (teacherId) => {
    navigate(frontRoutes.navigate.teachers.edit(teacherId));
  };

  const onDelete = async (teacherId) => {
    try {
      await axios.delete(apiRoutes.deleteTeacher(teacherId));
      fetchTeachers();
    } catch (error) {
      console.log("Помилка при видаленні:", error);
    }
  };

  let currentContent;
  if (isLoading) currentContent = <div>Loading....</div>;
  else if (error) currentContent = <div>Error</div>;
  else
    currentContent = (
      <div>
        {teachersList.length === 0 ? (
          <div>Список порожній</div>
        ) : (
          <div>
            <div>
              <button
                className={styles.addBtn}
                onClick={() => navigate(frontRoutes.navigate.teachers.add)}
              >
                Додати нового вчителя
              </button>

              {!!selectedTeachersIdList.length && (
                <button
                  onClick={gotoMeetings}
                >{`Викликати вчителів на збори (${selectedTeachersIdList.length})`}</button>
              )}
            </div>

            {teachersList.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                onSelect={onSelect}
                isSelected={selectedTeachersIdList.includes(teacher.id)}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    );
  return currentContent;
}

export default TeachersList;
