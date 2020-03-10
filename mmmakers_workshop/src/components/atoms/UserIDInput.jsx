import React , { useState } from 'react';
import '../../styles/atoms/UserIDInput.css';



const UserIDInput = () => {
  const [userId, setUserId] = useState('');
  const onSetUserIdChange = (e) => {
    setUserId(e.currentTarget.value);
  }
  return (
    <div className="UserIDInput">
      <input className="UID_textInput" placeholder="userIDを入力してください" id="UID_text" type="password" value={userId} onChange = {onSetUserIdChange}/>
    </div>
  );
}

export default UserIDInput;
