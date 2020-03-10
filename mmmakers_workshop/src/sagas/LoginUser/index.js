import { takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, REGISTRATION_REQUEST} from "../../actions/LoginUser/ActionType";
import { loginSaga } from "./Login";
import { registrationSaga } from "./Registration";

const loginUserSaga = [
  takeLatest(LOGIN_REQUEST, loginSaga),
  takeLatest(REGISTRATION_REQUEST, registrationSaga)
]

export default loginUserSaga;
