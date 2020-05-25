import { call, put } from '@redux-saga/core/effects';
import { registration } from '../../apis/LoginUser/Registration';
import { registrationSuccess, registrationFailed } from '../../actions/LoginUser/ActionCreater';
import { loaded } from '../../actions/Upload/ActionCreator';


export function* registrationSaga(data) {
  console.log('in login saga');
  const response = yield call(registration, data);
  console.log(response.status);
  if (response.status === 200) {
    console.log(response);
    yield put(registrationSuccess(response.data, data));
    yield put(loaded());
    console.log("success");
  } else {
    yield put(registrationFailed());
    console.log("connect failed");
  }
}
