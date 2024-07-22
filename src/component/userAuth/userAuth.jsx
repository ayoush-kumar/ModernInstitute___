import React from 'react'
import Layout from '../Layouts/Layout'
// import UserLogin from './userLogin'
// import UserSignup from './userSignup'
// import Home from './userHome'
// import { Navigate, Route, Routes } from 'react-router-dom';
// import RefrshHandler from './RefrshHandler';
// import { useState } from 'react';

const UserAuth = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const PrivateRoute = ({ element }) => {
    //   return isAuthenticated ? element : <Navigate to="/login" />
    // }
  return (

    
    <div>
        <Layout>
        {/* <RefrshHandler setIsAuthenticated={setIsAuthenticated} /> */}
      {/* <Routes>
        <Route path='/' element={<Navigate to="/userAuth" />} />
        <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/UserSignup' element={<UserSignup />} />
        <Route path='/Home' element={<PrivateRoute element={<Home />} />} />
      </Routes> */}

      <h1 style={{ textAlign:'center'}}>User-Dashboard</h1>
        
        </Layout>
      
    </div>
  )
}

export default UserAuth;
