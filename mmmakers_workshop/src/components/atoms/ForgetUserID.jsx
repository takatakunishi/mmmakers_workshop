import React from 'react';
import '../../styles/atoms/ForgetUserID.css';
import { useHistory } from 'react-router-dom';

const ForgetUserID = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: '/login/',
      state: {
      }
    });
  };
  return (
    <div className="ForgetUserID" onClick={handleClick}>
      既に登録済みの方はこちら
    </div>
  );
}

export default ForgetUserID;
