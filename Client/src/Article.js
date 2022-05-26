import React, { useState } from 'react'
import './Article.css'

function Article({ src, title, content }) {

  const [contentShow,setContentShow] = useState(false)

  return (
    <div onClick={() => {
      setContentShow(!contentShow)
    }}>
      <div className='inner-article-container'>
        <div className='article-pic'>
          <img className='img-article' src={src} />
        </div>
        <div className='w-[10vw]'>
          <div className='article-info'><h1>{title}</h1></div>
          <div className='article-info'>
            {/* {contentShow ? <div dangerouslySetInnerHTML={{ __html: content }} /> : <></>} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article