import React, {useState} from 'react';
import '../../styles/atoms/UserPassInput.css';

const UserPassInput = () => {
  const [password, setPassword] = useState('');
  const onSetPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  }
  return (
    <div className="UserPassInput">
          <input className="UPI_textInput" placeholder="パスワードを入力してください" id="UPI_text" type = "password" value = {password} onChange = {onSetPasswordChange}/>
    </div>
  );
}

export default UserPassInput;
