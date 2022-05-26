import React from 'react'
import { useOutletContext } from 'react-router-dom'

function UserMeInfo() {

  const [userInfo,setUserInfo] = useOutletContext();

  return (
    <div>
      <div className='mb-[2vw]'>
        <div className='mb-[2vw]'>Title : {userInfo.title}</div>
        <div className='mb-[2vw]'>About : {userInfo.content}</div>
        <div className='mb-[2vw]'>Name : {userInfo.name}</div>
        <div className='mb-[2vw]'>Phone Number : {userInfo.phoneNumber}</div>
      </div>
    </div>
  )
}

export default UserMeInfo