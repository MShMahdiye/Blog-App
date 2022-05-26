import React from 'react'
import { Link } from 'react-router-dom'

function DropDown({ isOpen, toggle }) {
  return (
    <div className={isOpen ?'grid grid-rows-3 text-center items-center w-[40vw] h-[40vw] bg-red-100 ': 'hidden'}
    onClick={toggle}>
      <Link className='p-[1.2rem]' to={'/'} >HOME</Link>
      <Link className='p-[1.2rem]' to={'/user/me'}>ME</Link>
      <Link className='p-[1.2rem]' to={'/dashbord'}>DASHBORD</Link>
    </div>
  )
}

export default DropDown