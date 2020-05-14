import { useHistory } from 'react-router-dom';

const initState = {
  userName: '',
  password: '',
  login: false
}

export default function LoginUserState(state = initState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        userName: action.data.data.userName,
        password: action.data.data.password,
        login: true
      }
    case 'REGISTRATION_SUCCESS':
      console.log(action.data)
      return {
        userName: action.data.data.userName,
        password: action.data.data.password,
        login: true
      }
    default:
      return state;
  }
}
