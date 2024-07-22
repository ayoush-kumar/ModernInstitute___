import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./AllRoutes.css";

import AboutUs from "../Pages/AboutUs/AboutUs";
import HomePage from "../Pages/HomePage";
import Faculty from "../Pages/Faculty/Faculties";
import Gallery from "../Pages/Gallery/Gallery";
import ListOfCourses from "../Pages/Courses/ListOfCourses";
import Naac from "../Pages/NAAC/Naac";
import Admission from "../Pages/Admission/Admission";
import Login from "../Pages/Login/Login";
import ApplyOnline from "../Pages/ApplyOnline/ApplyOnline.jsx";

import StudentSidebar from "../component/StudentDashboard/StudentSidebar/StudentSidebar";
import StudentNavbar from "../component/StudentDashboard/StudentNavbar/StudentNavbar";
import StudentDashboard from "../Pages/StudentDashboard/Dashboard/StudentDashboard";
import StudentSchedule from "../Pages/StudentDashboard/Schedule/StudentSchedule";
import Students from "../Pages/StudentDashboard/Student/Students";
import StudentSyllabusPage from "../Pages/StudentDashboard/Syllabus/StudentSyllabusPage";
import StudentAssignmentPage from "../Pages/StudentDashboard/Assignment/StudentAssignmentPage";
import StudentQuestionPaperPage from "../Pages/StudentDashboard/QuestionPaper/StudentQuestionPaperPage";
import StudentAttendancePage from "../Pages/StudentDashboard/Attendance/StudentAttendancePage";
import StudentTestPage from "../Pages/StudentDashboard/Test/StudentTestPage";
import StudentMarksPage from "../Pages/StudentDashboard/Marks/StudentMarksPage";
import StudentChangePassword from "../Pages/StudentDashboard/Profile/StudentChangePassword";
import StudentNotification from "../Pages/StudentDashboard/Notification/StudentNotification";
import StudentCalendar from "../Pages/StudentDashboard/Calendar/StudentCalendar";
import StudentExamPage from "../Pages/StudentDashboard/Exam/StudentExamPage";
import StudentProfileForm from "../Pages/StudentDashboard/Profile/StudentProfileForm";

import TeacherSidebar from "../component/TeacherDashboard/Sidebar/TeacherSidebar";
import TeacherNavbar from "../component/TeacherDashboard/Navbar/TeacherNavbar";
import TeacherDashboard from "../Pages/TeacherDashboard/Dashboard/TeacherDashboard";
import TeacherSchedule from "../Pages/TeacherDashboard/Schedule/TeacherSchedule";
import TeacherStudent from "../Pages/TeacherDashboard/Student/TeacherStudent";
import TeacherSyllabusPage from "../Pages/TeacherDashboard/Syllabus/TeacherSyllabusPage";
import TeacherAssignmentPage from "../Pages/TeacherDashboard/Assignment/TeacherAssignmentPage";
import TeacherTestPage from "../Pages/TeacherDashboard/Test/TeacherTestPage";
import TeacherMarksPage from "../Pages/TeacherDashboard/Marks/TeacherMarksPage";
import TeacherNewQuestion from "../Pages/TeacherDashboard/NewQuestion/TeacherNewQuestion";
import TeacherProfileForm from "../Pages/TeacherDashboard/Profile/TeacherProfileForm";
import TeacherNotification from "../Pages/TeacherDashboard/Notification/TeacherNotification";
import TeacherCalendar from "../Pages/TeacherDashboard/Calendar/TeacherCalendar";
import TeacherChangePassword from "../Pages/TeacherDashboard/Profile/TeacherChangePassword";
import TeacherAttandancePage from "../Pages/TeacherDashboard/Attandance/TeacherAttandancePage";
import TeacherExamPage from "../Pages/TeacherDashboard/Exam/TeacherExamPage";
import AdminLogin from "../Pages/AdminDashboard/Login";
import Sidebar from "../component/AdminDashboard/Sidebar";
import Dashboard from "../Pages/AdminDashboard/Dashboard";
import Student from "../Pages/AdminDashboard/Student/Student";
import Teachers from "../Pages/AdminDashboard/Teacher/Teachers";
import Registration from "../Pages/AdminDashboard/Registration/Registration";
import AdminAdmission from "../Pages/AdminDashboard/Admission/AdminAdmission";
import ProfileForm from "../component/AdminDashboard/ProfileForm";
import ChangePassword from "../component/AdminDashboard/ChangePassword";
import Notification from "../Pages/AdminDashboard/Notification";
import Courses from "../Pages/AdminDashboard/Courses";
import Exam from "../Pages/AdminDashboard/Exam";
import Calendar from "../Pages/AdminDashboard/Calendar";
import Fees from "../Pages/AdminDashboard/Fees";
import Attendance from "../Pages/AdminDashboard/Attendance";
import Assignment from "../Pages/AdminDashboard/Assignment/Assignment";
import Schedule from "../Pages/AdminDashboard/Schedule/Schedule";

import AdmissionAndFee from "../component/AdmissionAndFee/AdmissionAndFee.jsx";
import CoreValue from "../component/CoreValue/CoreValue.jsx";
import StudentSurvey from "../component/StudentSurvey/StudentSurvey.jsx"
import Contact from "../component/Contact/Contact.jsx"
import GeneralRules from "../component/GeneralRules/GeneralRules.jsx"
import Alumni from "../component/Alumni/Alumni.jsx"
import Facilities from "../component/Facilities/Facilities.jsx"
import CodeOfConduct from "../component/CodeOfConduct/CodeOfConduct.jsx"
import CodeOfEthics from "../component/CodeOfEthics/CodeOfEthics.jsx"
import GBMembers from "../component/GBMembers/GBMembers.jsx"

import UserAuth from "../component/userAuth/userAuth.jsx"
import UserLogin from "../component/userAuth/userLogin.jsx"
import UserSignup from "../component/userAuth/userSignup.jsx"









const AllRoutes = () => {
  const [toggleSidbarStudent, setToggelSidebarStudent] = useState(false);
  const [toggleSidbarTeacher, setToggelSidebarTeacher] = useState(false);
  const location = useLocation();
  const isStudentDashboard = location.pathname.includes("/student");
  const isTeacherDashboard = location.pathname.includes("/teacher");
  // const isAdminDashboard = location.pathname.includes("/admin");

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/faculties" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/naac_ssr_aqar" element={<Naac />} />
        <Route path="/listofcourses" element={<ListOfCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-Login" element={<AdminLogin />} />
        <Route path="/AdmissionAndFee" element={<AdmissionAndFee/>}/>
        <Route path="/CoreValue" element={<CoreValue/>}/>
        <Route path="/StudentSurvey" element={<StudentSurvey/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/GeneralRules" element={<GeneralRules/>}/>
        <Route path="/Alumni" element={<Alumni/>}/>
        <Route path="/Facilities" element={<Facilities/>}/>
        <Route path="/CodeOfConduct" element={<CodeOfConduct/>}/>
        <Route path="/CodeOfEthics" element={<CodeOfEthics/>}/>
        <Route path="/GBMembers" element={<GBMembers/>}/>
        <Route path="/applyonline" element={<ApplyOnline/>}/>

        {/* Auth */}
        <Route path="/userAuth" element={<UserAuth/>}/>
        <Route path="/userLogin" element={<UserLogin/>}/>
        <Route path="/userSignup" element={<UserSignup/>}/>
        

        <Route
          path="/admin-dashboard"
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />
        <Route
          path="/admin-student"
          element={
            <Sidebar>
              <Student />
            </Sidebar>
          }
        />
        <Route
          path="/admin-teacher"
          element={
            <Sidebar>
              <Teachers />
            </Sidebar>
          }
        />
        <Route
          path="/admin-registration"
          element={
            <Sidebar>
              <Registration />
            </Sidebar>
          }
        />
        <Route
          path="/admin-admission"
          element={
            <Sidebar>
              <AdminAdmission />
            </Sidebar>
          }
        />
        <Route
          path="/admin-dashboard/profile"
          element={
            <Sidebar>
              <ProfileForm />
            </Sidebar>
          }
        />
        <Route
          path="/admin-dashboard/profile/changepassword"
          element={
            <Sidebar>
              <ChangePassword />
            </Sidebar>
          }
        />
        <Route
          path="/admin-notifications"
          element={
            <Sidebar>
              <Notification />
            </Sidebar>
          }
        />
        <Route
          path="/admin-courses"
          element={
            <Sidebar>
              <Courses />
            </Sidebar>
          }
        />
        <Route
          path="/admin-exam"
          element={
            <Sidebar>
              <Exam />
            </Sidebar>
          }
        />
        <Route
          path="/admin-calendar"
          element={
            <Sidebar>
              <Calendar />
            </Sidebar>
          }
        />
        <Route
          path="/admin-fees"
          element={
            <Sidebar>
              <Fees />
            </Sidebar>
          }
        />
        <Route
          path="/admin-attendance"
          element={
            <Sidebar>
              <Attendance />
            </Sidebar>
          }
        />
        <Route
          path="/admin-assignment"
          element={
            <Sidebar>
              <Assignment />
            </Sidebar>
          }
        />
        <Route
          path="/admin-schedule"
          element={
            <Sidebar>
              <Schedule />
            </Sidebar>
          }
        />
      </Routes>

      {isStudentDashboard && (
        <div className="container">
          <div>
            <StudentSidebar toggleSidbarStudent={toggleSidbarStudent} />
          </div>
          <div className="content">
            <StudentNavbar
              toggleSidbarStudent={toggleSidbarStudent}
              setToggelSidebarStudent={setToggelSidebarStudent}
            />
            <Routes>
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/student-schedule" element={<StudentSchedule />} />
              <Route path="/student-student" element={<Students />} />
              <Route
                path="/student-syllabus"
                element={<StudentSyllabusPage />}
              />
              <Route
                path="/student-assignment"
                element={<StudentAssignmentPage />}
              />
              <Route
                path="/student-questionpaper"
                element={<StudentQuestionPaperPage />}
              />
              <Route
                path="/student-attendance"
                element={<StudentAttendancePage />}
              />
              <Route path="/student-test" element={<StudentTestPage />} />
              <Route path="/student-marks" element={<StudentMarksPage />} />
              <Route
                path="/student-dashboard/profile"
                element={<StudentProfileForm />}
              />
              <Route
                path="/student-dashboard/profile/changepassword"
                element={<StudentChangePassword />}
              />
              <Route
                path="/student-notification"
                element={<StudentNotification />}
              />
              <Route path="/student-exam" element={<StudentExamPage />} />
              <Route path="/student-calendar" element={<StudentCalendar />} />
            </Routes>
          </div>
        </div>
      )}

      {isTeacherDashboard && (
        <div className="container">
          <div>
            <TeacherSidebar toggleSidbarTeacher={toggleSidbarTeacher} />
          </div>
          <div className="content">
            <TeacherNavbar
              toggleSidbarTeacher={toggleSidbarTeacher}
              setToggelSidebarTeacher={setToggelSidebarTeacher}
            />
            <Routes>
              <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
              <Route path="/teacher-schedule" element={<TeacherSchedule />} />
              <Route path="/teacher-student" element={<TeacherStudent />} />
              <Route
                path="/teacher-syllabus"
                element={<TeacherSyllabusPage />}
              />
              <Route
                path="/teacher-assignment"
                element={<TeacherAssignmentPage />}
              />
              <Route
                path="/teacher-attendance"
                element={<TeacherAttandancePage />}
              />
              <Route path="/teacher-test" element={<TeacherTestPage />} />
              <Route
                path="/teacher-studentmarks"
                element={<TeacherMarksPage />}
              />
              <Route path="/teacher-exam" element={<TeacherExamPage />} />
              <Route
                path="/teacher-newquestion"
                element={<TeacherNewQuestion />}
              />
              <Route
                path="/teacher-dashboard/profile"
                element={<TeacherProfileForm />}
              />
              <Route
                path="/teacher-dashboard/profile/changepassword"
                element={<TeacherChangePassword />}
              />
              <Route
                path="/teacher-notification"
                element={<TeacherNotification />}
              />
              <Route path="/teacher-calendar" element={<TeacherCalendar />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default AllRoutes;
