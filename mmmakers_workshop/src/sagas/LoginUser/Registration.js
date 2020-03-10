import { call, put } from '@redux-saga/core/effects';
import { registration } from '../../apis/LoginUser/Registration';
import { registrationSuccess, registrationFailed } from '../../actions/LoginUser/ActionCreater';
// import { getFunnyRequest } from '../../actions/Funny/ActionCreator';


export function* registrationSaga(action) {
  console.log('in login saga');
  const response = yield call(registration, action.data);
  console.log(response.status);
  if (response.status === 201) {
    console.log(response);
    yield put(registrationSuccess({userId:response.data.userId,token:"token"}));
    console.log("success");
  } else {
    yield put(registrationFailed());
    console.log("connect failed");
  }
}
