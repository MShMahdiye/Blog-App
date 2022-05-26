import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header({ toggle }) {

  let hamRef = useRef();

  return (
    <div className=''>
      <nav className='flex justify-between items-center h-[5vw]'>
        <div className='px-4 cursor-pointer md:hidden' onClick={toggle} ref={hamRef}>
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" className="icon filter-icon icon-14">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z" fill="#0D0C22"></path>
          </svg>
        </div>
        <div className='pr-[0.5rem] font-bold md:block hidden' >
          <Link className='p-[1.2rem] hover:text-[#E08DA1] hover:drop-shadow-md' to={'/'} >HOME</Link>
          <Link className='p-[1.2rem] hover:text-[#E08DA1] hover:drop-shadow-md' to={'/dashboard/my-blogs'}>ME</Link>
          <Link className='p-[1.2rem] hover:text-[#E08DA1] hover:drop-shadow-md' to={'/dashboard'}>DASHBOARD</Link>
        </div>
        <div>
          <Link className='btn-login w-[5vw] rounded-[0.3rem] font-bold px-[1.5rem] py-[0.5rem] hover:text-[#E08DA1]' to={'/user/login'}>LOGIN</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header