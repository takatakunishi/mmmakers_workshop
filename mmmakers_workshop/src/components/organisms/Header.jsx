import React from 'react';
import '../../styles/organisms/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className = "Header">
      <div className = "site-title-container">
        <Link to="/" className = "site-title">Creaters Workshop</Link>
      </div>
    </div>
  )
}

export default Header;
