import { combineReducers } from "redux";
import LoginUserState from './LoginUser/LoginUserState';

const rootReducer = combineReducers({
  loginUser: LoginUserState,
});

export default rootReducer;
