import React from 'react';
import '../../styles/templates/UserLoginTemplate.css';
import UserLoginForm from '../organisms/UserLoginForm'
import Load from '../molecules/Load'

const UserLoginTemplate = () => {
  return (
    <div className="UserLoginTemplate">
      <div className="ULT-container">
        <UserLoginForm />
      </div>
      <Load showWord={"Login now"} />
    </div>
  );
}

export default UserLoginTemplate;
