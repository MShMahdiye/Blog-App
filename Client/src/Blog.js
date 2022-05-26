import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './Blogs/BlogCss/Blog.css'

const mapStateToProps = (state) => {
  return {
    blogProps: state.blog
  }
}

function ConnectedBlog({ blogProps }) {

  return (
    <div className='flex flex-col'>
      <div className='p-[3vw] mt-[5vw]'>
        <div className='mb-[2vw] font-bold text-[2rem]'>{blogProps.title}</div>
        <div dangerouslySetInnerHTML={{ __html: blogProps.content }} />
      </div>
      <div className='editArtcle'>
        <div>EDIT THIS ARTICLE</div>
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
      <div className='ArticleByUser'>
        <div>OTHER ARTICLES BY THIS USER</div>
        <Link to={'/blog/by-user'}>
          <span>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 20 20"
              fill="none" className="site-nav-dropdown-icon">
              <rect x="0.75" y="0.75" width="18.5" height="18.5"
                rx="3.25" fill="#F8C630" fillOpacity="0.2"
                stroke="#F8C630" strokeWidth="1.5px"></rect>
              <path d="M4.16667 5.08331C4.16667 4.6691 4.50246 4.33331 4.91667 4.33331H14.25C14.6642 4.33331 15 4.6691 15 5.08331C15 5.49753 14.6642 5.83331 14.25 5.83331L4.91667 5.83331C4.50246 5.83331 4.16667 5.49753 4.16667 5.08331Z" fill="#F8C630"></path>
              <path d="M4.16667 9.25C4.16667 8.83579 4.50246 8.5 4.91667 8.5L12.5833 8.5C12.9976 8.5 13.3333 8.83579 13.3333 9.25C13.3333 9.66422 12.9976 10 12.5833 10L4.91667 10C4.50246 10 4.16667 9.66421 4.16667 9.25Z" fill="#F8C630"></path>
              <path d="M4.91667 12.6666C4.50246 12.6666 4.16667 13.0024 4.16667 13.4166C4.16667 13.8308 4.50246 14.1666 4.91667 14.1666H9.25001C9.66422 14.1666 10 13.8308 10 13.4166C10 13.0024 9.66422 12.6666 9.25001 12.6666H4.91667Z" fill="#F8C630"></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}

const Blog = connect(mapStateToProps)(ConnectedBlog)

export default Blog