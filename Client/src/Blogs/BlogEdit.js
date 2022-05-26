import React, { useState } from 'react'
import EditorBlog from './EditorBlog';
import './BlogCss/WriteBlog.css'
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { useParams } from 'react-router-dom';

const cookies = new Cookies()

const mapStateToProps = (state) => {
  return{
    nameProps : state.name,
    blogProps : state.blog
  }
}

function BlogEdit({nameProps,blogProps}) {

  const {_id} = useParams

  const [blogInfoEdit, setBlogInfoEdit] = useState({ title: '', })

  const getValue = (e) => {
    setBlogInfoEdit({ ...blogInfoEdit, [e.target.name]: e.target.value })
    console.log('blogInfoEdit : ', blogInfoEdit.imgurl);
  }

  const editBlog = async () => {
    fetch('http://localhost:4000/blog/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth': `ut ${cookies.get('token')}`
      },
      body: JSON.stringify({
        blogId: blogProps._id,
        data: {
          title: blogInfoEdit.title,
          content: blogInfoEdit.content,
          imgurl: blogInfoEdit.imgurl
        }
      })
    }).then(() => {
      console.log('its form BlogEdit')
    })
  }

  return (
    <div className='flex flex-col justify-center items-center bg-white py-[1.5rem] px-[1rem] rounded-[0.5rem]'>
      <div className='text-left w-[75vw] font-bold mb-[0.5rem]'><label>ID:</label></div>
      <div><input className='inp-write-blog' name='id' placeholder='ID' value={blogInfoEdit.ID} onChange={getValue} /></div>
      <div className='text-left w-[75vw] font-bold mb-[0.5rem]'><label>Title:</label></div>
      <div><input className='inp-write-blog' name='title' placeholder='Title' value={blogInfoEdit.title} onChange={getValue} /></div>
      <div className='text-left w-[75vw] font-bold mb-[0.5rem]'><label>Image URL:</label></div>
      <div><input className='inp-write-blog' name='imgurl' placeholder='Image URL' value={blogInfoEdit.imgurl} onChange={getValue} /></div>
      <div className='text-left w-[75vw] font-bold mb-[0.5rem]'><label>Content:</label></div>
      <div className='EditorBlog-container overflow-auto'>
        <EditorBlog blogInfoEdit={blogInfoEdit} setBlogInfoEdit={setBlogInfoEdit} />
      </div>
      <div className='btn-write-blog-container'><button className='btn-write-blog' onClick={editBlog}>ADD</button></div>
    </div>
  )
}

export default connect(mapStateToProps)(BlogEdit)