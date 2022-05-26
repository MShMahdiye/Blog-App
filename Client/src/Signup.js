import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { AddName } from './Redux/Actions/action';
import './Signup.css'
import Uploader from './Uploader';

const mapDispatchToProps = (dispatch) => {
  return {
    addName: name => dispatch(AddName(name))
  }
}

function useIsMountedRef() {
  const isMountedRef = useRef(null);
  useEffect(() => {
    isMountedRef.current = true;
    return () => isMountedRef.current = false;
  });
  return isMountedRef;
}

const cookies = new Cookies()

function ConnectedSignup(props) {

  const isMountedRef = useIsMountedRef();
  const [userInfo, setUserInfo] = useState({ username: '', })
  const navigate = useNavigate();

  const getValue = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    console.log('userInfo : ', userInfo.name);
  }

  const submitUser = async () => {

    if(isMountedRef.current){

      fetch('http://localhost:4000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imgurl: 'https://cdn.dribbble.com/users/1450667/screenshots/4051283/media/62151c53fa1e540097ee035759e27d08.jpg?compress=1&resize=400x300&vertical=top',
          username: userInfo.username,
          name: userInfo.name
        })
      }).then(res => res.json()).then((data) => {
        cookies.set('token', data.token)
        props.addName(userInfo.name)
      }).then(() => {
        const token = cookies.get('token')
        if (token) {
          navigate("/dashboard", { replace: true });
        }
      })

    }
  }

  return (
    <div className='big-signupContainer'>
      <div className='signupContainer h-[40vw] w-[70vw]'>
        <div className='left-signup flex flex-col justify-center items-center'>
          <div className='mb-[3rem] flex flex-col justify-center items-center '>
            <div className='mb-[5rem] font-bold text-[2rem]'>
              <h1>Hello there</h1>
            </div>
            <div className='mb-[2rem]'>
              <h1>Are you already registerd?</h1>
            </div>
          </div>
          <div><Link className='btn-page-signup-login bg-[#f7f2f4]' to={'/user/login'}>Login</Link></div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='mb-[5rem] font-bold text-[2rem]'><h1>Signup</h1></div>
          <div className='justify-center items-center mb-[5rem]'>
            <Uploader dragActive={<div className='w-[7vw] h-[7vw] rounded-full justify-center items-center cursor-pointer bg-[#e7e9eb]'>
              <span className='icon-sign-pic'>
                <svg xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 14 14" className="site-nav-dropdown-icon small-icon">
                  <path d="M7 0.75L7 13.25M13.25 7L0.75 7" stroke="#74C4BA" strokeWidth="1.5px" strokeLinecap="round"></path>
                </svg>
              </span>
            </div>} stylep={{ width: "7vw", height: '7vw', borderRadius: "50%", justifyContent: "center", alignItems: 'center' }} />
          </div>
          <div className='mb-[3rem]'>
            <div><input className='inp-signup' name='username' value={userInfo.username} placeholder='User Name' onChange={getValue} /></div>
            <div><input className='inp-signup' name='name' value={userInfo.name} placeholder='Name' onChange={getValue} /></div>
          </div>
          <div><button className='btn-page-signup bg-[#F6E9EE]' onClick={submitUser} >Signup</button></div>
        </div>
      </div>
    </div>
  )
}

const Signup = connect(null, mapDispatchToProps)(ConnectedSignup)

export default Signup