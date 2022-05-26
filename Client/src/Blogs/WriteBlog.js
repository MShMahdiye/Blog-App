import React, { useEffect, useState } from 'react'
import EditorBlog from './EditorBlog'
import './BlogCss/WriteBlog.css'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const cookies = new Cookies()

const mapStateToProps = (state) => {
  return{
    nameProps : state.name
  }
}

function ConnectedWriteBlog({nameProps}) {

  const [blogInfo,setBlogInfo] = useState({title:'',})
  const [resultOfWrite,setResultOfWrite] = useState({})

  const getValue = (e) => {
    setBlogInfo({...blogInfo,[e.target.name]: e.target.value})
    console.log('blogInfo : ',blogInfo.imgurl);
  }

  useEffect(() => {
    console.log('token from cookies : ', cookies.get('token'));
  },[])

  const submitBLog = async () => {
    console.log('submitBLog fetch and cookie')
    fetch('http://localhost:4000/blog/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth': `ut ${cookies.get('token')}`
      },
      body: JSON.stringify({
        title: blogInfo.title,
        content: blogInfo.content,
        imgurl: blogInfo.imgurl
      })
    }).then((res) => {
      console.log('!!!!')
      return res.json()
    }).then((data) => {
      console.log("data from json ; ",data);
      setResultOfWrite(data);
      console.log('resultOfWrite : ',resultOfWrite);
      setBlogInfo({title:'',content:'',imgurl:''})
    })
  }

  return (
    <div className='flex flex-col justify-center items-center bg-white py-[1.5rem] px-[1rem] rounded-[0.5rem]'>
      <div className='text-left w-[75vw] font-bold mb-[0.5rem]'><label>Title:</label></div>
      <div><input className='inp-write-blog' name='title' placeholder='Title' value={blogInfo.title} onChange={getValue} /></div>
      <div className='text-left w-[75vw] font-bold mb-[0.5rem]'><label>Image URL:</label></div>
      <div><input className='inp-write-blog' name='imgurl' placeholder='Image URL' value={blogInfo.imgurl} onChange={getValue} /></div>
      <div className='text-left w-[75vw] font-bold mb-[0.5rem]'><label>Content:</label></div>
      <div className='EditorBlog-container overflow-auto'>
      <EditorBlog blogInfo={blogInfo} setBlogInfo={setBlogInfo} />
      </div>
      <div  className='btn-write-blog-container'><button className='btn-write-blog' onClick={submitBLog}>ADD</button></div>
    </div>
  )
}

export default connect(mapStateToProps)(ConnectedWriteBlog)
{/* <Link to={`http://localhost:4000/blog/${_id}`} onClick={submitBLog}> */}