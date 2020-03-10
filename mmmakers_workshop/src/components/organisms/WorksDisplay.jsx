import React from 'react'
import '../../styles/organisms/WorksDisplay.css'
import AllWorksDisplay from '../molecules/AllWorksDisplay'
import UsersProjects from '../molecules/UsersProjects'

const WorksDisplay = () => {
  return (
    <div className = "WorksDisplay">
      <div className = "WD-container">
        <AllWorksDisplay />
        <UsersProjects />
      </div>
    </div>
  )
}

export default WorksDisplay;
