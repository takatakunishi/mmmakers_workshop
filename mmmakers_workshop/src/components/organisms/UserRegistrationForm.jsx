import React from 'react';
import '../../styles/organisms/UserRegistrationForm.css';
import RegistrationFunction from '../molecules/RegistrationFunction'

const UserRegistrationForm = () => {
  return (
    <div className="UserRegistrationForm">
      <div className = "URF-container">
        <div className = "URF-title-container">
          <div className = "URF-title">ユーザー登録</div>
        </div>
        <RegistrationFunction />
      </div>
    </div>
  );
}

export default UserRegistrationForm;
