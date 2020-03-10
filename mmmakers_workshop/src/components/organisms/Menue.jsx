import React from 'react';
import '../../styles/organisms/Menue.css'
import GoPostWorksTab from '../molecules/GoPostWorksTab'
import UserPostedWorksTab from '../molecules/UserPostedWorksTab'
import StartLiveTab from '../molecules/StartLiveTab'

const Menue = () =>{

  return (
    <div className = "Menue">
      <div className = "M-container" className = "nDisp">
        <GoPostWorksTab />
        <UserPostedWorksTab />
        <StartLiveTab />
      </div>
    </div>
  )
}

export default Menue;
