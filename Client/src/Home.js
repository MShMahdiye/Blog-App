import { list } from 'postcss'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedText from './AnimatedText'
import Article from './Article'
import Blogs from './Blogs/Blogs'
import DropDown from './DropDown'
import Header from './Header'
import './Home.css'

function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  let menuRef = useRef();

  return (
    <div className='Home-container mb-[2vw]'>
      <div>
        <Header toggle={toggle} setIsOpen={setIsOpen} />
        <div ref={menuRef}><DropDown isOpen={isOpen} toggle={toggle} /></div>
        <div className='flex items-center justify-center w-[100vw] h-[5vw]'><AnimatedText /></div>
      </div>
      <div className='mainContainer'>
        <div className='flex justify-start items-end font-bold text-[2.5rem] px-[0.1rem] pb-[0.5rem]'><h1>WRITE YOUR NEXT ARTICLE FASTER</h1></div>
        <div className='img-main'></div>
      </div>
      <div className='div-article-container'>
        <div className='article-container'>
          <Blogs />
        </div>
      </div>
    </div>
  )
}

export default Home