import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../style/Admission.module.css";
import Header from "../../component/Layouts/Header";
import Footer from "../../component/Layouts/Footer";

const Admission = () => {
  const [formData, setFormData] = useState({
    Name: "",
    fatherName: "",
    motherName: "",
    email: "",
    mobileNo: "",
    address: "",
    state: "",
    country: "",
    cityORVillage: "",
    pin: "",
    gender: "",
    DOB: "",
    bloodGroup: "",
    tenth_passoutYear: "",
    AadharNumber: "",
    courseTaken: "",
    branchName: "",
    busService: "",
    hostelService: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    setLoading(true);

    fetch(
      "https://university-project-paresh.onrender.com/University/Admission/submitAdmissionForm",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setLoading(false);
        toast.success("Form submitted successfully!", {
          toastClassName: styles.toastSuccess,
          bodyClassName: styles.toastBody
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error.message);
        toast.error("Failed to submit form!", {
          toastClassName: styles.toastError,
          bodyClassName: styles.toastBody
        });
      });
  };

  return (
    <>
      <Header />
      <div className={styles.admissionFormSection}>
        <div className={styles.admissionForm}>
          <h2>Admission Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.formGroup} ${styles.gridContainer}`}>
              <div className={styles.gridItem}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  value={formData.Name}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.gridContainer}`}>
              <div className={styles.gridItem}>
                <label htmlFor="fatherName">Father's Name</label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="motherName">Mother's Name</label>
                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.gridContainerThree}`}>
              <div className={styles.gridItem}>
                <label htmlFor="mobileNo">Mobile Number</label>
                <input
                  type="text"
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="tenth_passoutYear">Year of 10th Passout</label>
                <input
                  type="text"
                  id="tenth_passoutYear"
                  name="tenth_passoutYear"
                  value={formData.tenth_passoutYear}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="AadharNumber">Aadhar Number</label>
                <input
                  type="text"
                  id="AadharNumber"
                  name="AadharNumber"
                  value={formData.AadharNumber}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.gridContainer}`}>
              <div className={styles.gridItem}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.gridContainerThree}`}>
              <div className={styles.gridItem}>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="cityORVillage">City or Village</label>
                <input
                  type="text"
                  id="cityORVillage"
                  name="cityORVillage"
                  value={formData.cityORVillage}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="pin">PIN</label>
                <input
                  type="text"
                  id="pin"
                  name="pin"
                  value={formData.pin}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.gridContainerThree}`}>
              <div className={styles.gridItem}>
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="DOB">Date of Birth</label>
                <input
                  type="text"
                  id="DOB"
                  name="DOB"
                  value={formData.DOB}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="bloodGroup">Blood Group</label>
                <input
                  type="text"
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.gridContainer}`}>
              <div className={styles.gridItem}>
                <label htmlFor="courseTaken">Course Taken</label>
                <input
                  type="text"
                  id="courseTaken"
                  name="courseTaken"
                  value={formData.courseTaken}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="branchName">Branch Name</label>
                <input
                  type="text"
                  id="branchName"
                  name="branchName"
                  value={formData.branchName}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.gridContainer}`}>
              <div className={styles.gridItem}>
                <label htmlFor="busService">Bus Service</label>
                <input
                  type="text"
                  id="busService"
                  name="busService"
                  value={formData.busService}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.gridItem}>
                <label htmlFor="hostelService">Hostel Service</label>
                <input
                  type="text"
                  id="hostelService"
                  name="hostelService"
                  value={formData.hostelService}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Admission;
