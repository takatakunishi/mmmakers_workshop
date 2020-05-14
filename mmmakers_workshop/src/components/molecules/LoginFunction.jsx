import React, { useEffect } from 'react'
import '../../styles/molecules/LoginFunction.css'
import UserIDInput from '../atoms/UserIDInput'
import UserPassInput from '../atoms/UserPassInput'
import Tosignup from '../atoms/Tosignup'
import { loginRequest } from '../../actions/LoginUser/ActionCreater'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


const LoginFunction = () => {
  const history = useHistory();
  const login = useSelector(state => state.loginUser.login);
  const dispatch = useDispatch();

  useEffect(() => {
    loginCheck()
  })

  const onClickLoginButton = () => {
    const id = document.getElementById("UID_text");
    const pass = document.getElementById("UPI_text");
    if (pass.value !== '' && id.value !== '') {
      const data = {
        userName: id.value,
        password: pass.value
      }
      dispatch(loginRequest(data));
      console.log(id.value);
      console.log(pass.value);
      pass.value = '';
      id.value = '';
    } else {
      alert("必要事項が全て入力されていません");
    }
  }

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

  return (
    <div className="LoginFunction">
      <UserIDInput />
      <UserPassInput />
      <button className="btn-flat-border" onClick={onClickLoginButton}>Log in</button>
      <Tosignup />
    </div>
  )
}

export default LoginFunction;
