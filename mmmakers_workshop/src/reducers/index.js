import { combineReducers } from "redux";
import LoginUserState from './LoginUser/LoginUserState';
import WorksState from './Works/WorksState';
import ContentState from './Upload/ContentState';

const rootReducer = combineReducers({
  loginUser: LoginUserState,
  worksState: WorksState,
  content: ContentState
});

export default rootReducer;
