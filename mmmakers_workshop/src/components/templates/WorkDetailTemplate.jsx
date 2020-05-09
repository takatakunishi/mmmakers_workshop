import React from 'react'
import '../../styles/templates/WorkDetailTemplate.css'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import UserProfile from '../organisms/UserProfile'
import ShowWorkData from '../organisms/ShowWorkData'

const WorkDetailTemplate = () => {
    return (
        <div className="WorkDetailTemplate">
            <Header />
            <div className="WorkDetailContentsContainer">
                <ShowWorkData />
                <UserProfile />
                <Footer />
            </div>
        </div>
    )
}

export default WorkDetailTemplate;
