import React, { useState } from "react";
import "./ApplyOnline.css";

import Header from "../../component/Layouts/Header";
import Footer from "../../component/Layouts/Footer";

const ApplyOnline = () => {
  const [formData, setFormData] = useState({
    branch: "",
    course: "",
    candidateName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    dateOfBirth: "",
    category: "",
    religion: "",
    nationality: "",
    aadharCard: "",
    mobileNumber: "",
    emailAddress: "",
    fathersContact: "",
    CorrespondenceAddress: "",
    Pincode4A: "",
    PermanentAddress4B: "",
    State4B: "",
    District4B: "",
    Pincode4B: "",
    ParentsEducationalQualification: "",
    nameoforganization: "",
    designation: " ",
    organizationcontactNo: "",
    declaration:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const handleEduChange = (index, event) => {
    const { name, value } = event.target;
    const newEducation = [...education];
    newEducation[index][name] = value;
    setEducation(newEducation);
  };

  const [education, setEducation] = useState([
    { name: 'High School (SSLC)', board: '', year: '', institution: '', subject: '', marks: '', percentage: '' },
    { name: 'Intermediate', board: '', year: '', institution: '', subject: '', marks: '', percentage: '' },
    // { name: 'Others', board: '', year: '', institution: '', subject: '', marks: '', percentage: '' },
  ]);



  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);
  const handleFileChange = (event, setFile) => {
    setFile(event.target.files[0]);
  };


  return (
    <>
      <Header />

      <div className="registration-form">
        <h2 className="form-group">REGISTRATION APPLICATION FORM FOR COURSE</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <h3>
              1. Course Details{" "}
              </h3>
            <div className="form-group">
              <label htmlFor="branch">Branch</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              >
                <option value="">Bounsi</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="course">Course*</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">--Select Course--</option>
                <option value="Auxiliary Nursing Midwifery(A.N.M)">Auxiliary Nursing Midwifery(A.N.M)</option>
                <option value="General Nursing Midwifery(G.N.M.)">General Nursing Midwifery(G.N.M.)</option>
                <option value="Bachelor of Science in Nursing(B.Sc Nursing)">Bachelor of Science in Nursing(B.Sc Nursing)</option>
                <option value="Bachelor of Pharmacy(B.Pharm)">Bachelor of Pharmacy(B.Pharm)</option>
                <option value="Diploma in Pharmacy (D.Pharm)">Diploma in Pharmacy (D.Pharm)</option>
                <option value="Dresser (CMD)">Dresser (CMD)</option>
                <option value="Diploma in Dental Mechanical">Diploma in Dental Mechanical</option>
                <option value="Diploma in Operation Theatre">Diploma in Operation Theatre</option>
                <option value="Diploma in Medical Laboratory Technician">Diploma in Medical Laboratory Technician</option>
                <option value="Diploma in X-Ray Technician">Diploma in X-Ray Technician</option>
                <option value="Diploma in Physiotherapy Technician">Diploma in Physiotherapy Technician</option>
                <option value="Diploma in Sanitary Inspector">Diploma in Sanitary Inspector</option>
                <option value="Diploma in ECG Technology">Diploma in ECG Technology</option>
                <option value="">--Select Course--</option>
                <option value="">--Select Course--</option>
                <option value="">--Select Course--</option>
                <option value="">--Select Course--</option>
              </select>
            </div>
          </section>

          <section>
            <h3>2. Applicant's Personal Details</h3>
            <div className="form-group">
              <label htmlFor="candidateName">Candidate's Name*</label>
              <input
                type="text"
                name="candidateName"
                value={formData.candidateName}
                onChange={handleChange}
                required
              />
              <small>
                (Full name as per the highest / latest qualification certificate
                or legal certificate)
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="fatherName">Father's/Guardian Name*</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
              <small>(Full Name As Per Educational/Legal Certificate)</small>
            </div>
            <div className="form-group">
              <label htmlFor="motherName">Mother's Name*</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
              <small>(Full Name As Per Educational/Legal Certificate)</small>
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender*</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth* (dd-mm-yyyy)</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category*</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">--Select One--</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="religion">Religion*</label>
              <select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                required
              >
                <option value="">--Select One--</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Cristian">Cristian</option>
                <option value="Sikh">Sikh</option>
                <option value="Jain">Jain</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality*</label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              >
                <option value="">--Select One--</option>
                <option value="Indian">Indian</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="aadharCard">Aadhar Card No.*</label>
              <input
                type="text"
                name="aadharCard"
                value={formData.aadharCard}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          <section>
            <h3>3. Contact Details</h3>
            <div className="form-group">
              <label>Mobile Number*</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address*</label>
              <input
                type="text"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Father's Contact Number*</label>
              <input
                type="text"
                name="fathersContact"
                value={formData.fathersContact}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          <section>
            <h3 className="form-group">
              4. Address Details (4A is Correspondence Address) , (4B is
              Permanent Address)
            </h3>
            {/* <div className="form-group">
              <label>4A-Address for Correspondence*</label>
              <input
                type="text"
                name="AddressforCorrespondence"
                value={formData.AddressforCorrespondence4A}
                onChange={handleChange}
                required
              />
            </div> */}

<div className="form-group">
              <label>4A-Address for Correspondence*</label>
              <input
                type="text"
                name="CorrespondenceAddress"
                value={formData.CorrespondenceAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>4A - Pincode*</label>
              <input
                type="text"
                name="Pincode4A"
                value={formData.Pincode4A}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>4B - Permanent Address*</label>
              <input
                type="text"
                name="PermanentAddress4B"
                value={formData.PermanentAddress4B}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>4B - State*</label>
              <select
                name="State4B"
                value={formData.State4B}
                onChange={handleChange}
                required
              >
                <option value="">--Select One--</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label>4B - District*</label>
              <select
                name="District4B"
                value={formData.District4B}
                onChange={handleChange}
                required
              >
                <option value="">--Select One--</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label>4B - Pincode*</label>
              <input
                type="text"
                name="Pincode4B"
                value={formData.Pincode4B}
                onChange={handleChange}
                required
              />
            </div>
          </section>


          <section>


          <h3 className="form-group">5. Educational / Qualification Details</h3>
      <table className="form-group">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name of Exam</th>
            <th>Board/University</th>
            <th>Passing Year</th>
            <th>Institution</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {education.map((edu, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{edu.name}</td>
              <td>
                <input
                  type="text"
                  name="board"
                  value={edu.board}
                  onChange={(e) => handleEduChange(index, e)}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="year"
                  value={edu.year}
                  onChange={(e) => handleEduChange(index, e)}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => handleEduChange(index, e)}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="subject"
                  value={edu.subject}
                  onChange={(e) => handleEduChange(index, e)}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="marks"
                  value={edu.marks}
                  onChange={(e) => handleEduChange(index, e)}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="percentage"
                  value={edu.percentage}
                  onChange={(e) => handleEduChange(index, e)}
                  required
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </section>

          <section>
            <h3 className="form-group">6. Parent's Details</h3>
            <div className="form-group">
              <label>Parent's Educational Qualification*</label>
              <select
                name="ParentsEducationalQualification"
                value={formData.ParentsEducationalQualification}
                onChange={handleChange}
                required
              >
                <option value="">
                  --Select One--
                </option>
                <option value="10 (SSLC)n">
                  10 (SSLC)
                </option>
                <option value="10+2(Intermediate)">
                  10+2(Intermediate)
                </option>
                <option value="Degree(UG)">
                  Degree(UG)
                </option>
                <option value="Degree(PG)">
                  Degree(PG)
                </option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>
          </section>

          <section>
            <h3 className="form-group">7. Parent's Employment Details</h3>
            <div className="form-group">
              <label>Name of the Organization</label>
              <input
                type="text"
                name="nameoforganization"
                value={formData.nameoforganization}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              {" "}
              <label>Organization Contact No.</label>
              <input
                type="text"
                name="organizationcontactNo"
                value={formData.organizationcontactNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address of the Organization</label>
              <input
                type="text"
                name="organizationaddress"
                value={formData.organizationaddress}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          <section>
            <h2 className="form-group">8. Upload Photo & Signature</h2>

            <div className="form-group">
            <label>Upload Photo</label>
            <input
              type="file"
              name="photo"
              onChange={(event) => handleFileChange(event, setPhoto)}
              required
            />
            </div>

            <div className="form-group">
            <label>Upload Signature</label>
            <input
              type="file"
              name="signature"
              onChange={(event) => handleFileChange(event, setSignature)}
              required
            />
            </div>
            
          </section>


          <section>
          <h3 className="form-group">9. Declaration</h3>
          <div className="form-group">
          <label>
          <div style={{display:'flex', alignItems: 'center'}} >
          <input
          type="checkbox"
          name="declaration"
          value={formData.declaration}
          onChange={handleChange}
          required
        />
        <span style={{ marginLeft: '8px' }}>I hereby declare that the information furnished above is true, complete and correct to the best of my knowledge and belief.</span>
          </div>
        
      </label>
          </div>
          </section>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ApplyOnline;
