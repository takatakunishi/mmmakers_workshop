const initState = {
  userId: '',
  token: ''
}
export default function LoginUserState( state = initState, action){
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return{
        ...state
      }
    case 'LOGIN_SUCCESS':
      return{
        ...state,
        userId: action.data.userId,
        token: action.data.token
      }
    case 'REGISTRATION_SUCCESS':
      return{
        ...state,
        userId: action.data.userId,
        token: action.data.token
      }
    default:
      return state;
  }
}
