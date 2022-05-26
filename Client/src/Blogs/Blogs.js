import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Article from '../Article'
import { AddBlog } from '../Redux/Actions/action'

const mapDispatchToProps = (dispatch) => {
  return {
    addBlog : blog => dispatch(AddBlog(blog))
  }
}

function ConnectedBlogs(props) {

  const navigate = useNavigate();

  const [blogsInfo, setBlogsInfo] = useState([])
  const [contor, setCounter] = useState(0)
  const [blogById, setBlogById] = useState({})

  useEffect(() => {
    fetch('http://localhost:4000/blog')
      .then((res) => {
        console.log('!!!!')
        return res.json()
      }).then(data => {
        console.log("data of all blogs **** ", data);
        setBlogsInfo(data)
        localStorage.setItem('blogs', JSON.stringify(data))
        console.log('blogsInfo', blogsInfo);
      }).catch((err) => {

        console.log('some err happend in fetch ;');
    
        let offlineWeather = localStorage.getItem('blogs');
        setBlogsInfo(JSON.parse(offlineWeather))
    
      })

      return function  (){

      }

  },[])

  const fetchBlogById = (_id) => {
    fetch(`http://localhost:4000/blog/${_id}`)
    .then((res) => {
      console.log('res from blog by id')
      return res.clone().json()
    }).then(data => {
      console.log('data from blog by id : ',data);
      props.addBlog(data)
    }).then(() => navigate(`/blog/${_id}`))
    
  }


  // useEffect(() => {

  // }, [contor, data1])

  // useEffect(() => {

  // }, [data1])

  // useEffect(() => {

  // }, [data2])

  console.log("blogs Info on blogs componet : ", blogsInfo);

  return (
    <div>
      <div className='grid grid-col-3 w-[100vw]'>
        {
          blogsInfo.map((item, i) => {
            return (<div key={item._id} id={i} onClick={() => fetchBlogById(item._id)}><Article src={item.imgurl} title={item.title} content={item.content} /></div>)
          })
        }
      </div>
    </div>
  )
}

const Blogs = connect(null,mapDispatchToProps)(ConnectedBlogs)

export default Blogs