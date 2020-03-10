import React from 'react';
import '../../styles/organisms/UserLoginForm.css';
import LoginFunction from '../molecules/LoginFunction'

const UserLoginForm = () => {
  return (
    <div className="UserLoginForm">
      <div className = "ULF-container">
        <div className = "ULF-title-container">
          <div className = "ULF-title">ログイン</div>
        </div>
        <LoginFunction />
      </div>
    </div>
  );
}

export default UserLoginForm;
