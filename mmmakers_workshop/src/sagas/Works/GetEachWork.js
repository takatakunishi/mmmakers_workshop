import { call, put } from '@redux-saga/core/effects';
import { getEachWork } from '../../apis/Works/GetEachWork';
import { getEachWorksSuccess, getEachWorkFailed } from '../../actions/Works/ActionCreater';
import { loaded } from '../../actions/Upload/ActionCreator';

export function* getEachWorkSaga(request) {
  console.log('in getallworks saga' + request.data);
  const response = yield call(getEachWork, request.data);
  console.log(response.status);
  if (response.status === 200) {
    console.log(response);
    yield put(getEachWorksSuccess(response.data));
    yield put(loaded());
    console.log("success");
  } else {
    console.log("connect failed");
    yield put(getEachWorkFailed());
  }
}
