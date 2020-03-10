import React from 'react'
import '../../styles/molecules/LoginFunction.css'
import UserIDInput from '../atoms/UserIDInput'
import UserPassInput from '../atoms/UserPassInput'
import ForgetUserID from '../atoms/ForgetUserID'
import {loginRequest} from '../../actions/LoginUser/ActionCreater'
import { useDispatch } from 'react-redux'

const LoginFunction = () => {
  const dispatch = useDispatch();
  const onClickLoginButton = () => {
    const id = document.getElementById("UID_text");
    const pass = document.getElementById("UPI_text");
    if (pass.value !== '' && id.value !== ''){
      const data = {
        userId: id.value,
        token: pass.value
      }
      dispatch(loginRequest(data));
      console.log(id.value);
      console.log(pass.value);
      pass.value = '';
      id.value = '';
    }else{
      alert("必要事項が全て入力されていません");
    }
  }
  return (
    <div className = "LoginFunction">
      LoginFunction
      <UserIDInput />
      <UserPassInput />
      <button className = "btn-flat-border" onClick={onClickLoginButton}>Log in</button>
      <ForgetUserID />
    </div>
  )
}

export default LoginFunction;
