import React from 'react'
import '../../styles/templates/PostWorkTemplate.css'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import PostData from '../organisms/PostData'
import Load from '../molecules/Load'

const PostWorkTemplate = () => {
  return (
    <div className="PostWorkTemplate">
      <Header />
      <div className="PostWorkContentsContainer">
        <PostData />
        <Footer />
      </div>
    </div>
  )
}

export default PostWorkTemplate;
