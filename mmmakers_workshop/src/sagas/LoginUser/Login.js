import { call, put } from '@redux-saga/core/effects';
import { login } from '../../apis/LoginUser/Login';
import { loginSuccess, loginFailed } from '../../actions/LoginUser/ActionCreater';

export function* loginSaga(action) {
  console.log('in login saga');
  const response = yield call(login, action.data);
  console.log(response.status);
  if (response.status === 201) {
    console.log(response);
    yield put(loginSuccess(response.data));
    console.log("success");
  } else {
    console.log("connect failed");
    yield put(loginFailed());
    // yield put(signInFailed());
  }
}
