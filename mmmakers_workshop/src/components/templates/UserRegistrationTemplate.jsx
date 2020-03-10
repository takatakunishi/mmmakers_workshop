import React from 'react';
import '../../styles/templates/UserRegistrationTemplate.css'
import UserRegistrationForm from'../organisms/UserRegistrationForm'

const UserRegistrationTemplate = () => {
  return (
    <div className="UserRegistrationTemplate">
      <div className = "URT-container">
        <UserRegistrationForm />
      </div>
    </div>
  );
}

export default UserRegistrationTemplate;
