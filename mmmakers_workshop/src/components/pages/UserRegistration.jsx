import React from 'react';
import '../../styles/pages/UserRegistration.css';
import UserRegistrationTemplate from '../templates/UserRegistrationTemplate.jsx'
import Load from '../molecules/Load'

const UserRegistration = () => {
  return (
    <div className="UserRegistration">
      < UserRegistrationTemplate />
      < Load showWord={"登録中"} />
    </div>
  );
}

export default UserRegistration;
