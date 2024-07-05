import { useState } from "react";
import Navbar from "../../../component/AdminDashboard/Navbar";
import StudentForm from "../../../component/AdminDashboard/Registration/StudentForm";
import TeacherForm from "../../../component/AdminDashboard/Registration/TeacherForm";
import "../../../style/AdminDashboard/Registration.css";

function Registration() {
  const [teacher, setTeacher] = useState(true);
  const [student, setStudent] = useState(false);

  const teacherBtn = () => {
    setTeacher(true);
    setStudent(false);
  };

  const studentBtn = () => {
    setStudent(true);
    setTeacher(false);
  };

  return (
    <>
      <Navbar />
      <div className="registrationContainer">
        <div className="buttonContainer">
          <button
            className={`button ${teacher ? "teacherActive" : ""}`}
            onClick={teacherBtn}
          >
            Teacher
          </button>
          <button
            className={`button ${student ? "studentActive" : ""}`}
            onClick={studentBtn}
          >
            Student
          </button>
        </div>

        {student && <StudentForm />}
        {teacher && <TeacherForm />}
      </div>
    </>
  );
}

export default Registration;
