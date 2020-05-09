import { combineReducers } from "redux";
import LoginUserState from './LoginUser/LoginUserState';
import WorksState from './Works/WorksState';

const rootReducer = combineReducers({
  loginUser: LoginUserState,
  worksState: WorksState
});

export default rootReducer;
