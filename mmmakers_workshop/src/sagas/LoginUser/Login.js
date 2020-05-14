import { call, put } from '@redux-saga/core/effects';
import { login } from '../../apis/LoginUser/Login';
import { loginSuccess, loginFailed } from '../../actions/LoginUser/ActionCreater';

export function* loginSaga(data) {
  console.log('in login saga');
  const response = yield call(login, data);
  console.log(response.status);
  if (response.status === 200) {
    console.log(response);
    yield put(loginSuccess(response.data, data));
    console.log("success");
  } else {
    console.log("connect failed");
    yield put(loginFailed());
    // yield put(signInFailed());
  }
}
