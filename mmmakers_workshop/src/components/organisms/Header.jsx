import React from 'react';
import '../../styles/organisms/Header.css'
import { Link } from 'react-router-dom';
import PostWorkTab from '../molecules/PostWorkTab'

const Header = () => {
  return (
    <div className="Header">
      <div className="site-title-container">
        <Link to="/" className="site-title">Creaters Workshop</Link>
      </div>
      <div className="PostWorkTab-container">
        <PostWorkTab />
      </div>
    </div>
  )
}

export default Header;
