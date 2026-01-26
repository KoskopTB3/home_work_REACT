import { useLocation } from "react-router";
import TeacherCard from "../components/teachers/TeacherCard";
import { useEffect, useState } from "react";

function Meetings() {
  const [localTeachersList, setLocalTeachersList] = useState([]);

  const { state } = useLocation();
  const teachersListForMeetings = state?.teachersListForMeetings;

  useEffect(() => {
    if (teachersListForMeetings) {
      setLocalTeachersList(teachersListForMeetings);
    }
  }, [teachersListForMeetings]);

  const onDelete = (teacherId) => {
    setLocalTeachersList((prev) =>
      prev.filter((teacher) => teacher.id !== teacherId),
    );
  };

  return (
    <div>
      {localTeachersList?.length ? (
        localTeachersList.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} onDelete={onDelete} />
        ))
      ) : (
        <div>Список не задано</div>
      )}
    </div>
  );
}

export default Meetings;
