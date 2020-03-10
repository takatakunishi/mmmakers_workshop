import React from 'react';
import '../../styles/templates/UserLoginTemplate.css';
import UserLoginForm from '../organisms/UserLoginForm'

const UserLoginTemplate = () => {
  return (
    <div className="UserLoginTemplate">
      <div className = "ULT-container">
        <UserLoginForm />
      </div>
    </div>
  );
}

export default UserLoginTemplate;
