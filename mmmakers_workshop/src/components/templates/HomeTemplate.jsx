import React from 'react'
import '../../styles/templates/HomeTemplate.css'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import UserProfile from '../organisms/UserProfile'
import WorksDisplay from '../organisms/WorksDisplay'
import Menue from '../organisms/Menue'

const HomeTemplate = () => {
  return (
    <div className="HomeTemplate">
      <Header />
      <div className="HomeContentsContainer">
        <Menue />
        <UserProfile />
        <WorksDisplay />
        <Footer />
      </div>
    </div>
  )
}

export default HomeTemplate;
