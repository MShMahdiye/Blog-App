import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

function UserMeInfoEdit() {

  const [userInfo, setUserInfo] = useOutletContext();

  const getValue = (e) => {
    setUserInfo({...userInfo,[e.target.name]: e.target.value})
    console.log('userInfo : ',userInfo.password);
  }

  return (
    <div className='mb-[2vw]'>
      <div>
        <div><input className='inp-login' name='title' value={userInfo.title} onChange={getValue} placeholder='Title' /></div>
        <div><input className='inp-login' name='content' value={userInfo.content} onChange={getValue} placeholder='About' /></div>
        <div><input className='inp-login' name='imgurl' value={userInfo.imgurl} onChange={getValue} placeholder='Iamge URL' /></div>
        <div><input className='inp-login' name='name' value={userInfo.name} onChange={getValue} placeholder='Name' /></div>
        <div><input className='inp-login' name='phoneNumber' value={userInfo.phoneNumber} onChange={getValue} placeholder='Phone Number' /></div>
      </div>
    </div>
  )
}

export default UserMeInfoEdit