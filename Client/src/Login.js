import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Login.css'
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    nameProps : state.name
  }
}

function ConnectedLogin({nameProps}) {

  const navigate = useNavigate();

  const [userInfo,setUserInfo] = useState({username:'',})

  const getValue = (e) => {
    setUserInfo({...userInfo,[e.target.name]: e.target.value})
  }

  

  const login = async () => {
    await fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    }).then((res) => {return res.json()}).then((data) => {
      if(data.token){
        navigate("/dashboard");
      } 
    })

    setUserInfo({username:'',password:''})
    
  }

  return (
    <div className='big-loginContainer'>
      <div className='loginContainer h-[40vw] w-[70vw]'>
        <div className='left-login flex flex-col justify-center items-center'>
          <div className='mb-[3rem] flex flex-col justify-center items-center '>
            <div className='mb-[5rem] font-bold text-[2rem]'>
              <h1>WELCOME</h1>
            </div>
            <div className='mb-[2rem]'>
              <h1>Do you have an account?</h1>
            </div>
          </div>
          <div><Link className='btn-page-login-signup bg-[#f7f2f4]' to={'/user/signup'}>Signup</Link></div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='mb-[5rem] font-bold text-[2rem]'><h1>Login</h1></div>
          <div className='mb-[3rem]'>
            <div><input className='inp-login' name='username' value={userInfo.username} placeholder='User Name' onChange={getValue} /></div>
            <div><input className='inp-login' name='password' value={userInfo.password} placeholder='Enter Password' onChange={getValue} /></div>
          </div>
          <div><button className='btn-page-login bg-[#F6E9EE]' onClick={login}>Login</button></div>
        </div>
      </div>
    </div>
  )
}

const Login = connect(mapStateToProps)(ConnectedLogin)

export default Login