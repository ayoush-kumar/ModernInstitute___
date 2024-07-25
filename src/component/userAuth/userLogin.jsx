import React, {useState} from 'react'
import Layout from '../Layouts/Layout'
import { Link, useNavigate }  from 'react-router-dom'
// import { Label } from '@mui/icons-material'
import { handleError, handleSuccess } from './utils.jsx';

import { ToastContainer } from 'react-toastify';



const UserLogin= () => {

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
})

const navigate = useNavigate();

const handleChange = (e) => {
  const {name, value} = e.target;
  console.log(name, value);
  const copyLoginInfo = { ...loginInfo };
  copyLoginInfo[name] = value;
  setLoginInfo(copyLoginInfo);
}
//console.log('signupInfo -> ',  signupInfo);
const handleLogin = async (e) => {
  e.preventDefault();
  const {email, password } = loginInfo;
  if (!email || !password) {
    return handleError('email and password are required')
  }
  try {
    const url = 'https://testapi-black-seven.vercel.app/auth/login'
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
    })
    const result = await response.json();
    const { success, message, jwtToken, name, error} = result;
    if( success ){
      handleSuccess(message);
      localStorage.setItem('token', jwtToken);
      localStorage.setItem('loggedInUser', name);
      setTimeout(() => {
        navigate('/userAuth')
      }, 1000)
    } else if ( error) {
      const details = error?.details[0].message;
      handleError(details);
    } else if(!success) {
      handleError(message);
    }
    console.log(result);
  } catch (err) {
    handleError(err);
  }
}



  return (
    <div>
        <Layout>
        <div >

        
          <h1 style={{ textAlign:'center'}}>Login Form</h1>
          <form 
            style={{ alignItems: 'center', padding:'20px', margin:' 10px' }}
            onSubmit={handleLogin}
          >
        <div>
            <label>Email</label>
              <input
              onChange={handleChange}
                type = 'email'
                name = 'email'
                autoFocus
                placeholder='Enter your email..'
                value={loginInfo.email}
              />
        </div>
        <div>
            <label>Password</label>
              <input
              onChange={handleChange}
                type = 'password'
                name = 'password'
                placeholder='Enter your password..'
                value={loginInfo.password}
              />
        </div>
        <button type='submit' style={{ width: "100px"}}>Login</button>
        <span> Don't have an account? 
              <Link to='/userSignup'> Sign-Up</Link>
        </span>


          </form>
          <ToastContainer />
          </div>    
        </Layout>
    </div>


  )
}

export default UserLogin
