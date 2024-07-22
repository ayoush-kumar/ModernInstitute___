import React, {useState} from 'react'
import Layout from '../Layouts/Layout'
import { Link, useNavigate }  from 'react-router-dom'
// import { Label } from '@mui/icons-material'
import { handleError, handleSuccess } from './utils.jsx';

import { ToastContainer } from 'react-toastify';
// import { SupervisorAccount } from '@mui/icons-material';


const UserSignup= () => {

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
})

const navigate = useNavigate();

const handleChange = (e) => {
  const {name, value} = e.target;
  console.log(name, value);
  const copySignupInfo = { ...signupInfo };
  copySignupInfo[name] = value;
  setSignupInfo(copySignupInfo);
}
//console.log('signupInfo -> ',  signupInfo);
const handleSignup = async (e) => {
  e.preventDefault();
  const { name, email, password } = signupInfo;
  if (!name || !email || !password) {
    return handleError('name, email and password are required')
  }
  try {
    const url = 'http://localhost:8080/auth/userSignup'
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupInfo)
    })
    const result = await response.json();
    const { success, message, error} = result;
    if( success ){
      handleSuccess(message);
      setTimeout(() => {
        navigate('/userLogin')
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
        <div style={{ alignItems:'a' }}>

        
          <h1 style={{ textAlign:'center'}}>Sign-Up Form</h1>
          <form 
            style={{ alignItems: 'center', padding:'20px', margin:' 10px' }}
            onSubmit={handleSignup}
          >
          <div>
            <label>Name</label>
              <input
              onChange={handleChange}
                type = 'text'
                name = 'name'
                autoFocus
                placeholder='Enter your name..'
                value={signupInfo.name}
              />
        </div>
        <div>
            <label>Email</label>
              <input
              onChange={handleChange}
                type = 'email'
                name = 'email'
                autoFocus
                placeholder='Enter your email..'
                value={signupInfo.email}
              />
        </div>
        <div>
            <label>Password</label>
              <input
              onChange={handleChange}
                type = 'password'
                name = 'password'
                placeholder='Enter your password..'
                value={signupInfo.password}
              />
        </div>
        <button type='submit' style={{ width: "100px"}}>SignUp</button>
        <span> Allready have an account? 
              <Link to='/userLogin'> Login</Link>
        </span>


          </form>
          <ToastContainer />
          </div>    
        </Layout>
    </div>


  )
}

export default UserSignup
