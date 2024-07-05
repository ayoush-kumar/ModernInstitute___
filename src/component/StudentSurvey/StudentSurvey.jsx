import React, { useState } from 'react';
import Select from 'react-select';
import './Surveystyles.css'; 

import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const satisfactionOptions = [
  { value: '85-100%', label: '85 to 100%' },
  { value: '75-84%', label: '75 to 84%' },
  { value: '55-74%', label: '55 to 74%' },
  { value: '30-54%', label: '30 to 54%' },
  { value: 'below 30%', label: 'Below 30%' },
];




const StudentSurvey = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNo: '',
    classCourse: '',
    semesterYear: '',
    subject: '',
    questions: Array(21).fill(''),
    suggestions: ['', '', ''],
  });

  const handleChange = (index, selectedOption) => {
    const newQuestions = [...formData.questions];
    newQuestions[index] = selectedOption;
    setFormData({ ...formData, questions: newQuestions });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuggestionChange = (index, value) => {
    const newSuggestions = [...formData.suggestions];
    newSuggestions[index] = value;
    setFormData({ ...formData, suggestions: newSuggestions });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (

    <>
    <Header/>

    <div className="survey-container">
      <h2>Student Satisfaction Survey</h2>
      <div className="input-group">
        <label >Name of the Student: </label>
        <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} />
      </div>
      <div className="input-group">
        <label>Roll No: </label>
        <input type="text" name="rollNo" value={formData.rollNo} onChange={handleInputChange} />
      </div>
      <div className="input-group">
        <label>Class/Course: </label>
        <input type="text" name="classCourse" value={formData.classCourse} onChange={handleInputChange} />
      </div>
      <div className="input-group">
        <label>Semester/Year: </label>
        <input type="text" name="semesterYear" value={formData.semesterYear} onChange={handleInputChange} />
      </div>
      <div className="input-group">
        <label>Subject: </label>
        <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} />
      </div>

      <h3>Guidelines for Students</h3>
      <ol>
        {Array.from({ length: 20 }).map((_, index) => (
          <li key={index}>
            <label>Question {index + 1}: </label>
            <Select
              options={satisfactionOptions}
              value={formData.questions[index]}
              onChange={(selectedOption) => handleChange(index, selectedOption)}
              classNamePrefix="react-select"
            />
          </li>
        ))}
      </ol>

      <div className="input-group">
        <label>Suggestions 1: </label>
        <input type="text" value={formData.suggestions[0]} onChange={(e) => handleSuggestionChange(0, e.target.value)} />
      </div>
      <div className="input-group">
        <label>Suggestions 2: </label>
        <input type="text" value={formData.suggestions[1]} onChange={(e) => handleSuggestionChange(1, e.target.value)} />
      </div>
      <div className="input-group">
        <label>Suggestions 3: </label>
        <input type="text" value={formData.suggestions[2]} onChange={(e) => handleSuggestionChange(2, e.target.value)} />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
        <Footer/>
    </>
  );
};

export default StudentSurvey;
