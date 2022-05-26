import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import Article from '../Article'

const mapStateToProps = (state) => {
  return{
    blogProps : state.blog
  }
}

function ConnectedBlogByUser({blogProps}) {
  const navigate = useNavigate();

  const [blogByUser,setBlogByUser] = useState([])

  const fetchBlogById = (_id) => {
    fetch(`http://localhost:4000/blog/${_id}`)
    .then((res) => {
      console.log('res from blog by id')
      return res.clone().json()
    }).then(data => {
      console.log('data from blog by id : ',data);
    }).then(() => navigate(`/blog/${_id}`))
    
  }

  useEffect(() => {
    fetch('http://localhost:4000/blog/by-user' ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },body: JSON.stringify({
        _id:blogProps.creatorId
      })

    })
    .then((res) => {
      // console.log( res.json())
      console.log('res from blog by User')
      return res.json()
    }).then(data => {
      console.log('data from blog by User : ',data);
      setBlogByUser(data)
    })
  },[])



  return (
    <div>{
      blogByUser.map((item) => {
        return (<div key={item._id} onClick={() => fetchBlogById(item._id)}><Article src={item.imgurl} title={item.title} content={item.content} /></div>)
      })
    }</div>
  )
}

const BlogByUser = connect(mapStateToProps)(ConnectedBlogByUser)

export default BlogByUser