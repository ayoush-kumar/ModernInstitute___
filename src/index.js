import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import  CollegeContext from './collegeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <CollegeContext>
      <App />
  </CollegeContext>
 
  
  </BrowserRouter>
  
  </React.StrictMode>
);


