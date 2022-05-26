import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Me.css'
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import Article from './Article';

const cookies = new Cookies()

const mapStateToProps = (state) => {
  return{
    nameProps : state.name
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

function Me({nameProps}) {

  const navigate = useNavigate();
  const isMountedRef = useIsMountedRef();

  const [myBlog, setMyBlog] = useState([])

  const fetchBlogById = async (_id) => {

      fetch(`http://localhost:4000/blog/${_id}`)
      .then((res) => {
        console.log('res from blog by id')
        return res.clone().json()
      }).then(data => {
        console.log('data from blog by id : ',data);
      }).then(() => navigate(`/blog/${_id}`))

  }

  useEffect(() => {

    if(isMountedRef.current){

      fetch('http://localhost:4000/blog/my-blogs',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth': `ut ${cookies.get('token')}`
        },body: '{}'
      }
    ).
      then(res => { return res.json()  }).then(
        data => {
          setMyBlog(data)
        }
      )

    }
  },[isMountedRef])

  return (
    <div className='bg-white'>
      <div className='w-[70vw]'>{
      myBlog.map((item) => {
        return (<div key={item._id} onClick={() => fetchBlogById(item._id)}><Article src={item.imgurl} title={item.title} content={item.content} /></div>)
      })
    }</div>
      <div className='editArtcle'>
        <div>EDIT AN ARTICLE</div>
        <Link to={'/dashboard/blog/edit'}>
          <span>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg" id="_x31_"
              enableBackground="new 0 0 24 24" height="20"
              viewBox="0 0 24 24" width="20" fill="#E54F6D" fillOpacity="0.2" stroke="#E54F6D" strokeWidth="1.5px">
              <path d="m11.894 24c-.131 0-.259-.052-.354-.146-.118-.118-.17-.288-.137-.451l.707-3.535c.02-.098.066-.187.137-.256l7.778-7.778c.584-.584 1.537-.584 2.121 0l1.414 1.414c.585.585.585 1.536 0 2.121l-7.778 7.778c-.069.07-.158.117-.256.137l-3.535.707c-.032.006-.065.009-.097.009zm1.168-3.789-.53 2.651 2.651-.53 7.671-7.671c.195-.195.195-.512 0-.707l-1.414-1.414c-.195-.195-.512-.195-.707 0zm2.367 2.582h.01z"></path><path d="m9.5 21h-7c-1.379 0-2.5-1.121-2.5-2.5v-13c0-1.379 1.121-2.5 2.5-2.5h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.827 0-1.5.673-1.5 1.5v13c0 .827.673 1.5 1.5 1.5h7c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m16.5 12c-.276 0-.5-.224-.5-.5v-6c0-.827-.673-1.5-1.5-1.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c1.379 0 2.5 1.121 2.5 2.5v6c0 .276-.224.5-.5.5z"></path><path d="m11.5 6h-6c-.827 0-1.5-.673-1.5-1.5v-2c0-.276.224-.5.5-.5h1.55c.232-1.14 1.243-2 2.45-2s2.218.86 2.45 2h1.55c.276 0 .5.224.5.5v2c0 .827-.673 1.5-1.5 1.5zm-6.5-3v1.5c0 .275.225.5.5.5h6c.275 0 .5-.225.5-.5v-1.5h-1.5c-.276 0-.5-.224-.5-.5 0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .276-.224.5-.5.5z"></path><path d="m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m13.5 12h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
              <path d="m13.5 15h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
            </svg>
          </span>
        </Link>
      </div>
      <div className='addArtcle'>
        <div>ADD NEW ARTICLE</div>
        <Link to={'/dashboard/write'}>
          <span>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg" width="20"
              height="20" viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
              <path d="M0.75 2C0.75 1.30964 1.30964 0.75 2 0.75H7C7.69036 0.75 8.25 1.30964 8.25 2V7C8.25 7.69036 7.69036 8.25 7 8.25H2C1.30964 8.25 0.75 7.69036 0.75 7V2ZM0.75 13C0.75 12.3096 1.30964 11.75 2 11.75H7C7.69036 11.75 8.25 12.3096 8.25 13V18C8.25 18.6904 7.69036 19.25 7 19.25H2C1.30964 19.25 0.75 18.6904 0.75 18V13ZM11.75 13C11.75 12.3096 12.3096 11.75 13 11.75H18C18.6904 11.75 19.25 12.3096 19.25 13V18C19.25 18.6904 18.6904 19.25 18 19.25H13C12.3096 19.25 11.75 18.6904 11.75 18V13Z" fill="#74C4BA" fillOpacity="0.2" stroke="#74C4BA" strokeWidth="1.5px"></path>
              <path d="M16.25 1C16.25 0.585786 15.9142 0.25 15.5 0.25C15.0858 0.25 14.75 0.585786 14.75 1V3.75H12C11.5858 3.75 11.25 4.08579 11.25 4.5C11.25 4.91421 11.5858 5.25 12 5.25H14.75V8C14.75 8.41421 15.0858 8.75 15.5 8.75C15.9142 8.75 16.25 8.41421 16.25 8V5.25H19C19.4142 5.25 19.75 4.91421 19.75 4.5C19.75 4.08579 19.4142 3.75 19 3.75H16.25V1Z" fill="#74C4BA"></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Me)
