import React, { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom';
import Cookies from 'universal-cookie';
import NavigationBar from '../NavigationBar';
import './BlogCss/DashboardOutlet.css'

function DashbordOutlet() {

  const cookies = new Cookies();

  const [open, setOpen] = useState(false);
  const [oldInfo, setOldInfo] = useState({});


  useEffect(() => {

    fetch('http://localhost:4000/user/me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth': `ut ${cookies.get('token')}`

      },
      body: JSON.stringify({})
    }).then((res) => {
      console.log(res)
      console.log('from new me useEffect')
      return res.json()
    }).then(data => {
      console.log('from new me useEffect last data : ', data)
      setOldInfo(data)
      console.log('from new me useEffect last data after setOldInfo : ', data)
    })

  }, [])


  return (
    <div className='dashboard-outlet-Container flex justify-between bg-[#F8F8F8] py-[2.7rem]'>
      <NavigationBar setOpen={setOpen} open={open} />
      <div className={`${open ? 'smallOutlet w-[79.4vw] h-[47vw]  flex justify-center items-center rounded-[0.7rem] ml-[2.5%] mr-[3.8%] mt-[5vw]' :
        'bigOutlet w-[90vw] h-[47vw]  flex justify-center items-center rounded-[0.7rem] ml-[2.5%] mr-[3.8%] mt-[5vw]'}`}>
        <Outlet context={[open, setOpen]} />
      </div>
      <div onClick={() => { setOpen(!open); }} className={`${open ? 'toggle-sidebar-open' : 'toggle-sidebar'}`}>
        {
          open ?
            <span>
              <svg xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"
                fill="none" className="site-nav-dropdown-arrow icon-12 fill-current" width="12" height="12">
                <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"
                  fill="#E54F6D"></path>
              </svg>
            </span>
            :
            <span>
              <svg xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg" width="14"
                height="14" viewBox="0 0 14 14" className="site-nav-dropdown-icon small-icon">
                <path d="M7 0.75L7 13.25M13.25 7L0.75 7" stroke="#E54F6D" strokeWidth="1.5px" strokeLinecap="round"></path>
              </svg>
            </span>
        }
      </div>
    </div>
  )
}

export default DashbordOutlet