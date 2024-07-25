import React, { useState } from "react";
import "./ApplyOnline.css";

import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'

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
    declaration: "",

    sslboard: '',
    sslpassingYear: '',
    sslinstitution: '',
    sslsubject: '',
    sslmarks : '',
    sslpercentage: '',

    interboard: '',
    interpassingYear: '',
    interinstitution: '',
    intersubject: '',
    interpercentage: '',

    otherboard: '',
    otherpassingYear: '',
    otherinstitution: '',
    othersubject: '',
    othermarks: '',
    otherpercentage: '',

  });

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  }
  const formattedDate = formatDate(formData.dateOfBirth);
  
const statesAndDistricts = {
  AndhraPradesh: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupati'],
  ArunachalPradesh: ['Itanagar', 'Tawang', 'Ziro', 'Pasighat', 'Bomdila'],
  Assam: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon'],
  Bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'],
  Chhattisgarh: ['Raipur', 'Bilaspur', 'Durg', 'Bhilai', 'Korba'],
  Goa: ['Panaji', 'Margao', 'Vasco da Gama', 'Ponda', 'Mapusa'],
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
  Haryana: ['Gurugram', 'Faridabad', 'Panchkula', 'Ambala', 'Panipat'],
  HimachalPradesh: ['Shimla', 'Manali', 'Dharamshala', 'Kullu', 'Solan'],
  Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar'],
  Karnataka: ['Bengaluru', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum'],
  Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Alappuzha'],
  MadhyaPradesh: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane'],
  Manipur: ['Imphal', 'Bishnupur', 'Churachandpur', 'Thoubal', 'Senapati'],
  Meghalaya: ['Shillong', 'Tura', 'Nongstoin', 'Jowai', 'Baghmara'],
  Mizoram: ['Aizawl', 'Lunglei', 'Saiha', 'Serchhip', 'Champhai'],
  Nagaland: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha'],
  Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Sambalpur'],
  Punjab: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda'],
  Rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur', 'Ajmer', 'Kota'],
  Sikkim: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Rangpo'],
  TamilNadu: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
  Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar'],
  Tripura: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar', 'Belonia'],
  UttarPradesh: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut'],
  Uttarakhand: ['Dehradun', 'Nainital', 'Haridwar', 'Rishikesh', 'Almora'],
  WestBengal: ['Kolkata', 'Darjeeling', 'Howrah', 'Siliguri', 'Durgapur'],
  // Add more states and districts as needed
};


  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setDistricts(statesAndDistricts[state] || []);
    setSelectedDistrict(''); // Reset district when state changes
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };





  const [profilePic, setProfilePic] = useState(null);
  const [sign, setSign] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSign = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };

  const handleDownload = () => {
    //const jsonData = JSON.stringify(formData, null, 2);

    const doc = new jsPDF();
    //doc.setFontSize(10);
    // const lines = doc.splitTextToSize(jsonData, 180);

    if (profilePic) {
      doc.setFontSize(12);
      doc.setFont("Arimo", " ");
      doc.text("Profile Picture", 110, 55);
      doc.addImage(profilePic, 'JPEG', 110, 15, 35, 35); // Adjust position and size as needed
    }
    if (signature) {
      doc.setFontSize(12);
      doc.setFont("Arimo", " ");
      doc.text("Signature", 160, 55);
      doc.addImage(signature, 'JPEG', 160, 35, 35, 15); // Adjust position and size as needed
    }


    doc.setFont("Arimo", "bold");
    doc.setFontSize(15);
    doc.text("Course Details", 110, 70);

    doc.setFontSize(12);
    doc.setFont("Arimo", " ");
    doc.text(`Branch: ${formData.branch}`, 110, 80);
    doc.text(`Course: ${formData.course}`, 110, 85);



    doc.setFont("Arimo", "bold");

    doc.setFontSize(35);
    doc.text("Application Form", 50, 10)

    

    doc.setFontSize(15);
    doc.text("Applicant's Personal Details", 10, 20)

    doc.setFontSize(12);
    doc.setFont("Arimo", " ");
    doc.text(`Candidate's Name: ${formData.candidateName}`, 10, 30);
    doc.text(`Gender: ${formData.gender}`, 10, 35);
    doc.text(`Date of Birth (dd-mm-yyyy): ${formattedDate}`, 10, 40);
    doc.text(`Category: ${formData.category}`, 10, 45);
    doc.text(`Religion: ${formData.religion}`, 10, 50);
    doc.text(`Nationality: ${formData.nationality}`, 10, 55);
    doc.text(`Aadhar Card No: ${formData.aadharCard}`, 10, 60);
    
    doc.setFont("Arimo", "bold");
    doc.setFontSize(15);
    doc.text("Contact Details", 10, 70);
    doc.setFont("Arimo", " ");

    doc.setFontSize(12);
    doc.text(`Mobile Number: ${formData.mobileNumber}`, 10, 80);
    doc.text(`Email Address: ${formData.emailAddress}`, 10, 85);
    doc.text(`Father's Contact Number: ${formData.fathersContact}`, 10, 90);

    doc.setFont("Arimo", "bold");
    doc.setFontSize(15);
    doc.text("Address Details", 10, 100)
    doc.setFontSize(12);
    doc.setFont("Arimo", " ");

    doc.text(`Permanent Address: ${formData.PermanentAddress4B}`, 10, 110);
    doc.text(`State: ${selectedState}`, 10, 115);
    doc.text(`District: ${selectedDistrict}`, 10, 120);
    doc.text(`Pincode: ${formData.Pincode4B}`, 10, 125);
    doc.text(`Correspondence Address: ${formData.CorrespondenceAddress}`, 10, 130);
    doc.text(`Correspondence Address's Pincode: ${formData.Pincode4A}`, 10, 135);

    doc.setFont("Arimo", "bold");
    doc.setFontSize(15);
    doc.text("Parent's Details", 10, 190)
    doc.setFontSize(12);
    doc.setFont("Arimo", " ");

    doc.text(`Father's/Guardian Name: ${formData.fatherName}`, 10, 200);
    doc.text(`Mother's Name: ${formData.motherName}`, 10, 205);
    doc.text(`Parent's Educational Qualification: ${formData.ParentsEducationalQualification}`, 10, 210);
    
    doc.setFont("Arimo", "bold");
    doc.setFontSize(15);
    doc.text("Parent's Employment Details", 10, 220)
    doc.setFontSize(12); 
    doc.setFont("Arimo", " ");

    doc.text(`Name of the Organization: ${formData.nameoforganization}`, 10, 230);
    doc.text(`Designation: ${formData.designation}`, 10, 235);
    doc.text(`Organization Contact No.: ${formData.organizationcontactNo}`, 10, 240);
    doc.text(`Address of the Organization: ${formData.declaration}`, 10, 245);




    doc.setFont("Arimo", "bold");
    doc.setFontSize(15);
    doc.text("Educational / Qualification Details", 10, 145)
    doc.setFontSize(12);
    doc.setFont("Arimo", " ");



    const columns = [
      { header: 'S. No.', dataKey: 'sno' },
      { header: 'Name of Exam', dataKey: 'exam' },
      { header: 'Board/University', dataKey: 'board' },
      { header: 'Passing Year', dataKey: 'year' },
      { header: 'Institution', dataKey: 'institution' },
      { header: 'Subject', dataKey: 'subject' },
      { header: 'Marks', dataKey: 'marks' },
      { header: 'Percentage', dataKey: 'percentage' }
    ];
  
    const rows = [
      {
        sno: '1',
        exam: 'High School (SSLC)',
        board: formData.sslboard,
        year: formData.sslpassingYear,
        institution: formData.sslinstitution,
        subject: formData.sslsubject,
        marks: formData.sslmarks,
        percentage: formData.sslpercentage
      },
      {
        sno: '2',
        exam: 'Intermediate',
        board: formData.interboard,
        year: formData.interpassingYear,
        institution: formData.interinstitution,
        subject: formData.intersubject,
        marks: formData.intermarks,
        percentage: formData.interpercentage
      },
      {
        sno: '3',
        exam: 'Other',
        board: formData.otherboard,
        year: formData.otherpassingYear,
        institution: formData.otherinstitution,
        subject: formData.othersubject,
        marks: formData.othermarks,
        percentage: formData.otherpercentage
      }
    ];
  
    // Generate the table with plain styling
    autoTable(doc, { 
      columns: columns, 
      body: rows, 
      startY: 150,
      theme: 'plain', // Use the plain theme for no color styling
      styles: { 
        fillColor: [255, 255, 255], // White background for cells
        textColor: [0, 0, 0],       // Black text color
        lineColor: [0, 0, 0],       // Black border color
        lineWidth: 0.1              // Thin border lines
      },
      headStyles: {
        fillColor: [255, 255, 255], // White background for header cells
        textColor: [0, 0, 0]        // Black text color for headers
      },
      bodyStyles: {
        fillColor: [255, 255, 255], // White background for body cells
        textColor: [0, 0, 0]        // Black text color for body cells
      }
    });
  


    // const jsonData = JSON.stringify(formData, null, 2);

    // const doc = new jsPDF();
    // doc.setFontSize(10);
    // const lines = doc.splitTextToSize(jsonData, 180);
    // doc.text(lines, 10, 10);

    doc.save("form-data.pdf");
  };


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
            <h3>1. Course Details </h3>
            <div className="form-group">
              <label htmlFor="branch">Branch</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              >
                
                <option value="">--Select Branch--</option>
                <option value="Bounsi">Bounsi</option>
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
                <option value="Auxiliary Nursing Midwifery(A.N.M)">
                  Auxiliary Nursing Midwifery(A.N.M)
                </option>
                <option value="General Nursing Midwifery(G.N.M.)">
                  General Nursing Midwifery(G.N.M.)
                </option>
                <option value="Bachelor of Science in Nursing(B.Sc Nursing)">
                  Bachelor of Science in Nursing(B.Sc Nursing)
                </option>
                <option value="Bachelor of Pharmacy(B.Pharm)">
                  Bachelor of Pharmacy(B.Pharm)
                </option>
                <option value="Diploma in Pharmacy (D.Pharm)">
                  Diploma in Pharmacy (D.Pharm)
                </option>
                <option value="Dresser (CMD)">Dresser (CMD)</option>
                <option value="Diploma in Dental Mechanical">
                  Diploma in Dental Mechanical
                </option>
                <option value="Diploma in Operation Theatre">
                  Diploma in Operation Theatre
                </option>
                <option value="Diploma in Medical Laboratory Technician">
                  Diploma in Medical Laboratory Technician
                </option>
                <option value="Diploma in X-Ray Technician">
                  Diploma in X-Ray Technician
                </option>
                <option value="Diploma in Physiotherapy Technician">
                  Diploma in Physiotherapy Technician
                </option>
                <option value="Diploma in Sanitary Inspector">
                  Diploma in Sanitary Inspector
                </option>
                <option value="Diploma in ECG Technology">
                  Diploma in ECG Technology
                </option>
                {/* <option value="">--Select Course--</option>
                <option value="">--Select Course--</option>
                <option value="">--Select Course--</option>
                <option value="">--Select Course--</option> */}
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
              <label htmlFor="dateOfBirth">Date of Birth* (mm-dd-yyyy)</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                placeholder="dd-mm-yyyy"
                pattern="\d{2}-\d{2}-\d{4}"
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
              <label>4A - Address for Correspondence*</label>
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


            <div>
          <label htmlFor="state">4B - State*</label>
          <select id="state" value={selectedState} onChange={handleStateChange}>
            <option value="">Select a state</option>
            {Object.keys(statesAndDistricts).map((state) => (
              <option key={state} value={state}>
                {state.replace(/([A-Z])/g, ' $1').trim()}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="district">4B - District*</label>
          <select
            id="district"
            value={selectedDistrict}
            onChange={handleDistrictChange}
            disabled={!selectedState}
          >
            <option value="">Select a district</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>



              {/* <label>4B - State*</label>
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
              </select> */}

              
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
  <h3 className="form-group">
    5. Educational / Qualification Details
  </h3>
  <table className="form-group">
    <thead>
      <tr>
        <th>S. No.</th>
        <th>Name of Exam</th>
        <th>Board/University</th>
        <th>Passing Year</th>
        <th>Institution</th>
        <th>All Subject</th>
        <th>Marks</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>
        High School (SSLC)
        </td>
        <td>
          <input
            type="text"
            name="sslboard"
            value={formData.sslboard}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="sslpassingYear"
            value={formData.sslpassingYear}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="sslinstitution"
            value={formData.sslinstitution}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="sslsubject"
            value={formData.sslsubject}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="sslmarks"
            value={formData.sslmarks}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="sslpercentage"
            value={formData.sslpercentage}
            onChange={handleChange}
            required
          />
        </td>
      </tr>

      <tr>
        <td>2</td>
        <td>
        Intermediate
        </td>
        <td>
          <input
            type="text"
            name="interboard"
            value={formData.interboard}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="interpassingYear"
            value={formData.interpassingYear}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="interinstitution"
            value={formData.interinstitution}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="intersubject"
            value={formData.intersubject}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="intermarks"
            value={formData.intermarks}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="interpercentage"
            value={formData.interpercentage}
            onChange={handleChange}
            required
          />
        </td>
      </tr>

      <tr>
        <td>3</td>
        <td>
          others
        </td>
        <td>
          <input
            type="text"
            name="otherboard"
            value={formData.otherboard}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="otherpassingYear"
            value={formData.otherpassingYear}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="otherinstitution"
            value={formData.otherinstitution}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="othersubject"
            value={formData.othersubject}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="othermarks"
            value={formData.othermarks}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="otherpercentage"
            value={formData.otherpercentage}
            onChange={handleChange}
          />
        </td>
      </tr>
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
                <option value="">--Select One--</option>
                <option value="10 (SSLC)n">10 (SSLC)</option>
                <option value="10+2(Intermediate)">10+2(Intermediate)</option>
                <option value="Degree(UG)">Degree(UG)</option>
                <option value="Degree(PG)">Degree(PG)</option>
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
                accept="image/*"
                onChange={handleProfilePicChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Upload Signature</label>
              <input
                type="file"
                name="signature"
                accept="image/*"
                onChange={handleSign}
                required
              />
            </div>
          </section>

          <section>
            <h3 className="form-group">9. Declaration</h3>
            <div className="form-group">
              <label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    name="declaration"
                    value={formData.declaration}
                    onChange={handleChange}
                    required
                  />
                  <span style={{ marginLeft: "8px" }}>
                    I hereby declare that the information furnished above is
                    true, complete and correct to the best of my knowledge and
                    belief.
                  </span>
                </div>
              </label>
            </div>
          </section>
<div style={{display:"flex", padding:'10px', gap:'100px'}}>
<button type="submit">Submit</button>
          <button type="button" onClick={handleDownload} disabled={!submitted}>
            Download PDF
          </button>
  
</div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ApplyOnline;
