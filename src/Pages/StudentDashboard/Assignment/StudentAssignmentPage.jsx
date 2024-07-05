import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentAssignmentPage.css";
import { FiX } from "react-icons/fi";

function StudentAssignmentPage() {
  const [assignmentList, setAssignmentList] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterAssignmentFor, setFilterAssignmentFor] = useState("");
  const [submissionText, setSubmissionText] = useState("");
  const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [marks, setMarks] = useState({});
  const studentId = localStorage.getItem("studentId");

  useEffect(() => {
    axios
      .get(
        "https://university-project-paresh.onrender.com/University/AssignmentRoute/allAssignments"
      )
      .then((response) => {
        setAssignmentList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching assignment data:", error);
      });
  }, []);

  const handleTitleFilterChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleAssignmentForFilterChange = (e) => {
    setFilterAssignmentFor(e.target.value);
  };

  const handleSubmissionTextChange = (e) => {
    setSubmissionText(e.target.value);
  };

  const handleSubmission = () => {
    if (!selectedAssignmentId) {
      console.error("No assignment selected");
      return;
    }
    const studentToken = localStorage.getItem("studentToken");
    axios
      .post(
        "https://university-project-paresh.onrender.com/University/AssignmentRoute/submitAssignment",
        {
          assignmentId: selectedAssignmentId,
          submissionText: submissionText
        },
        {
          headers: {
            Authorization: `Bearer ${studentToken}`
          }
        }
      )
      .then((response) => {
        console.log("Submission successful:", response.data);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error submitting assignment:", error);
      });
  };

  const openModal = (assignmentId) => {
    setSelectedAssignmentId(assignmentId);
    setShowModal(true);
  };

  useEffect(() => {
    // Fetch marks for all assignments when component mounts
    getMarksForAllAssignments();
  }, []);

  const getMarksForAllAssignments = () => {
    // Fetch marks for all assignments
    assignmentList.forEach((assignment) => {
      // console.log("id", assignment._id)
      axios
        .get(
          `https://university-project-paresh.onrender.com/University/MarksRoute/getMyMark/${studentId}/${assignment._id}`
        )
        .then((response) => {
          // Store marks in state with assignmentId as key
          setMarks((prevMarks) => ({
            ...prevMarks,
            [assignment._id]: response.data.marks
          }));
        })
        .catch((error) => {
          console.error("Error fetching marks:", error);
          // If marks are not available, set it to 0
          setMarks((prevMarks) => ({
            ...prevMarks,
            [assignment._id]: 0
          }));
        });
    });
  };

  return (
    <div className="student-assignment-page">
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="formHeader">
              <div className="title">
                <h2>Submit Assignment</h2>
              </div>
              <div className="closeButton">
                <button onClick={() => setShowModal(false)}>
                  <FiX />
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>Assignment ID:</label>
              <input
                id="selectedAssignmentId"
                className="form-input"
                type="text"
                placeholder="Assignment Id"
                value={selectedAssignmentId}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Submission Text:</label>
              <textarea
                className="form-input"
                rows="4"
                value={submissionText}
                onChange={handleSubmissionTextChange}
              />
            </div>
            <button className="submit-btn" onClick={handleSubmission}>
              Assignment Submit
            </button>
          </div>
        </div>
      )}
      <div className="filter-section">
        <div>
          <label className="filter-label">Title</label>
          <input
            type="search"
            name="search"
            placeholder="Search Title"
            className="searchInput"
            value={filterTitle}
            onChange={handleTitleFilterChange}
          />
        </div>
        <div>
          <label className="filter-label">Assignment for:</label>
          <input
            type="search"
            name="search"
            placeholder="Search Assignment for"
            className="searchInput"
            value={filterAssignmentFor}
            onChange={handleAssignmentForFilterChange}
          />
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilterTitle("");
            setFilterAssignmentFor("");
          }}
        >
          Reset
        </button>
      </div>

      <div className="assignment-list">
        <h2 className="assignment-list-title">Assignment List</h2>
        <div className="card-container">
          {assignmentList.map((assignment, index) => (
            <div key={index} className="card">
              <div>
                <p>
                  <strong>Title:</strong> {assignment.title}
                </p>
                <p>
                  <strong>Assignment For:</strong> {assignment.assignMent_for}
                </p>
                <p>
                  <strong>Description:</strong> {assignment.description}
                </p>
                <p>
                  <strong>Deadline:</strong>
                  {new Date(assignment.deadline).toLocaleDateString("en-GB")}
                </p>
                <p>
                  <strong>Teacher Name:</strong> {assignment.teacherName}
                </p>
                <p>
                  <strong>File:</strong>{" "}
                  <a href={assignment.fileUrl} download>
                    Download
                  </a>
                </p>
                <p>
                  <strong>Marks:</strong> {marks[assignment._id] || 0}/100
                </p>
                <button
                  className="submit-btn"
                  onClick={() => openModal(assignment._id)}
                >
                  Submit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentAssignmentPage;
