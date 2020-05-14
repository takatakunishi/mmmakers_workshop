import React, { useState, useEffect } from 'react'
import '../../styles/molecules/RegistrationFunction.css'
import { registrationRequest } from '../../actions/LoginUser/ActionCreater'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ForgetUserID from '../atoms/ForgetUserID'

const RegistrationFunction = () => {
  const history = useHistory();
  const login = useSelector(state => state.loginUser.login);
  // const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  // const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    loginCheck()
  })

  function loginCheck() {
    if (login) {
      history.push({
        pathname: '/',
        state: {
          // url: url,
          // path: path
        }
      });
    }
  }

  const onClickRegistrationButton = () => {
    if (password !== password2) {
      alert("同じパスワードが入力されていません");
    } else if (password !== '' && password2 !== '') {
      // console.log(userId);
      console.log(password);
      // console.log(email);
      console.log(userName);
      const data = {
        // userId:userId,
        userName: userName,
        password: password,
        // eMail:email
      };
      dispatch(registrationRequest(data));
      // setUserId('');
      setUserName('');
      setPassword('');
      setPassword2('');
      // setEmail('');
    } else {
      alert("全ての情報が入力されていません")
    }
  }
  // const onSetUserIdChange = (e) => {
  //   setUserId(e.currentTarget.value);
  // }
  const onSetUserNameChange = (e) => {
    setUserName(e.currentTarget.value);
  }
  const onSetPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  }
  const onSetPassword2Change = (e) => {
    setPassword2(e.currentTarget.value);
  }
  // const onsSetEmailChange = (e) => {
  //   setEmail(e.currentTarget.value);
  // }

  return (
    <div className="RegistrationFunction">
      {/* <input className = "RF_textInput" value={userId} placeholder="userIDを入力してください" onChange={onSetUserIdChange}/> */}
      <input className="RF_textInput" value={userName} placeholder="ユーザー名を入力してください" onChange={onSetUserNameChange} />
      <input className="RF_textInput" value={password} placeholder="パスワードを入力してください" onChange={onSetPasswordChange} type="password" />
      <input className="RF_textInput" value={password2} placeholder="もう一度パスワードを入力して下さい" onChange={onSetPassword2Change} type="password" />
      {/* <input className = "RF_textInput" value={email} placeholder="メールアドレスを入力してください" onChange={onsSetEmailChange}/> */}
      <button className="btn-flat-border" onClick={onClickRegistrationButton}>登録する</button>
      < ForgetUserID />
    </div>
  )
}

export default RegistrationFunction;
