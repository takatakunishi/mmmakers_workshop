import { call, put } from '@redux-saga/core/effects';
import { registration } from '../../apis/LoginUser/Registration';
import { registrationSuccess, registrationFailed } from '../../actions/LoginUser/ActionCreater';



export function* registrationSaga(data) {
  console.log('in login saga');
  const response = yield call(registration, data);
  console.log(response.status);
  if (response.status === 200) {
    console.log(response);
    yield put(registrationSuccess(response.data, data));
    console.log("success");
  } else {
    yield put(registrationFailed());
    console.log("connect failed");
  }
}
