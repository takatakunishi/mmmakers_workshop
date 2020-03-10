import React from 'react'
import '../../styles/organisms/UserProfile.css'
import UserBaseInfoTab from '../molecules/UserBaseInfoTab'
import FollowInfoTab from '../molecules/FollowInfoTab'
import LikeWorksTab from '../molecules/LikeWorksTab'
import MessageTab from '../molecules/MessageTab'
import UserPostedWorksTab from '../molecules/UserPostedWorksTab'

const UserProfile = () => {
  return (
    <div className = "UserProfile">
      <div className = "UPcontainer">
        <UserBaseInfoTab />
        <UserPostedWorksTab />
        <FollowInfoTab />
        <LikeWorksTab />
        <MessageTab />
      </div>
    </div>
  )
}

export default UserProfile;
