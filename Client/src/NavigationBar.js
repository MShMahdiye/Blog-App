import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'

function NavigationBar({ setOpen, open }) {
  const navigationList = [
    {
      title: 'Home', icon: <svg xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
        focusable="false" viewBox="0 0 24 24"
        aria-hidden="true" width="25"
        height="25"><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
          fill="#F8C630" fillOpacity="0.2"
          stroke="#F8C630" strokeWidth="1.5px"></path></svg>
      , link: '/', isSelected: false
    },
    {
      title: 'Me', icon:< svg xmlnsXlink = "http://www.w3.org/1999/xlink"
      xmlns = "http://www.w3.org/2000/svg"
      viewBox = "0 0 24 24" width = "25"
      height = "25" fill="#E54F6D" fillOpacity="0.2" stroke="#E54F6D" strokeWidth="1.5px" > <g id="_01_align_center"
        data-name="01 align center">
        <path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z">
        </path><path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z">
        </path></g></svg >, link: '/dashboard/user/me/userinfo/edit', isSelected: false
    },
    {
      title: 'Mine', icon: <svg xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none" className="site-nav-dropdown-icon">
        <rect x="0.75" y="0.75" width="18.5" height="18.5"
          rx="3.25" fill="#F8C630" fillOpacity="0.2"
          stroke="#F8C630" strokeWidth="1.5px"></rect>
        <path d="M4.16667 5.08331C4.16667 4.6691 4.50246 4.33331 4.91667 4.33331H14.25C14.6642 4.33331 15 4.6691 15 5.08331C15 5.49753 14.6642 5.83331 14.25 5.83331L4.91667 5.83331C4.50246 5.83331 4.16667 5.49753 4.16667 5.08331Z" fill="#F8C630"></path>
        <path d="M4.16667 9.25C4.16667 8.83579 4.50246 8.5 4.91667 8.5L12.5833 8.5C12.9976 8.5 13.3333 8.83579 13.3333 9.25C13.3333 9.66422 12.9976 10 12.5833 10L4.91667 10C4.50246 10 4.16667 9.66421 4.16667 9.25Z" fill="#F8C630"></path>
        <path d="M4.91667 12.6666C4.50246 12.6666 4.16667 13.0024 4.16667 13.4166C4.16667 13.8308 4.50246 14.1666 4.91667 14.1666H9.25001C9.66422 14.1666 10 13.8308 10 13.4166C10 13.0024 9.66422 12.6666 9.25001 12.6666H4.91667Z" fill="#F8C630"></path>
      </svg>, link: '/dashboard/my-blogs', isSelected: false
    },
    {
      title: 'SignOut', icon: <svg xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg" width="16"
        height="16" viewBox="0 0 16 16" fill="currentColor" className="site-nav-dropdown-arrow icon-12 fill-current">
        <path d="M12.9498 2.05017C13.5021 2.05017 13.9498 2.49789 13.9498 3.05017V11.7168C13.9498 12.2691 13.5021 12.7168 12.9498 12.7168C12.3975 12.7168 11.9498 12.2691 11.9498 11.7168V5.46438L3.7574 13.6568C3.36688 14.0473 2.73371 14.0473 2.34319 13.6568C1.95266 13.2662 1.95266 12.6331 2.34319 12.2426L10.5356 4.05017H4.28312C3.73084 4.05017 3.28312 3.60246 3.28312 3.05017C3.28312 2.49789 3.73084 2.05017 4.28312 2.05017L12.9498 2.05017Z" fill="#74C4BA"></path>
      </svg>, link: '/user/login', isSelected: false
    }
  ]

  const [list, setList] = useState([...navigationList])
  console.log(list);

  return (
    <div className='navigation-bar-container'>
      <div className={`${open ? 'navigation-me big' : 'navigation-me'}`} onClick={() => { setOpen(!open) }}>
        <ul>
          {
            list.map((item, i) => {
              return (
                <li className={`${item.isSelected ? 'active' : ''}`}
                  onClick={() => {
                    const newList = [...list]
                    newList.map((item) => {
                      item.isSelected = false
                    })
                    newList[i].isSelected = true;
                    setList([...newList])
                  }}
                  key={i}
                >
                  <Link to={`${item.link}`} className='flex w-[100%] text-[#fff]'>
                    <span className='icon flex justify-center items-center'>{item.icon}</span>
                    <span className='title'>{item.title}</span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar

