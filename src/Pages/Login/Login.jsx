import React, { useState } from "react";
import styles from "../../style/Login.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Layouts/Header";
import Footer from "../../component/Layouts/Footer";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [UID, setUID] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = () => {
    navigate("/admin-Login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://university-project-paresh.onrender.com/University/Student/signIn",
        { UID, password }
      );
      // console.log("res", response.data);
      // console.log("res", response.data.Teacher);
      if (response.data.loggedInFrom === "Student") {
        localStorage.setItem("studentToken", response.data.accessToken);
        localStorage.setItem("studentId", response.data.StudentId);
        // localStorage.setItem("studentName", response.data.Student.Name);
        alert(response.data.message);
        navigate("/student-dashboard/profile");
      } else if (response.data.loggedInFrom === "Teacher") {
        localStorage.setItem("teacherToken", response.data.accessToken);
        localStorage.setItem("teacherId", response.data.Teacher._id);
        localStorage.setItem("teacherName", response.data.Teacher.Name);
        alert(response.data.message);
        navigate("/teacher-dashboard/profile");
      } else {
        console.log(response.data);
        alert("Please, correct the UID");
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.card}>
          <div className={styles.card2}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <p id={styles.heading}>Login</p>
              <div className={styles.field}>
                <i className="fas fa-envelope inputIcon"></i>
                <input
                  className={styles.inputField}
                  placeholder="UID"
                  autoComplete="off"
                  value={UID}
                  onChange={(e) => setUID(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <i className="fas fa-lock inputIcon"></i>
                <input
                  type="password"
                  className={styles.inputField}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className={styles.forgot}>Forgot Password?</p>
              <div className="btn">
                <button className={styles.button1} type="submit">
                  Login
                </button>
              </div>
              <div className="btn">
                <button className={styles.button1} onClick={handleAdminLogin}>
                  Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
