import { call, put } from '@redux-saga/core/effects';
import { getAllWorks } from '../../apis/Works/GetAllWorks';
import { getAllWorksSuccess, getAllWorksFailed } from '../../actions/Works/ActionCreater';

export function* getAllWorksSaga() {
  console.log('in getallworks saga');
  const response = yield call(getAllWorks);
  console.log(response.status);
  if (response.status === 200) {
    console.log(response);
    yield put(getAllWorksSuccess(response.data));
    console.log("success");
  } else {
    console.log("connect failed");
    yield put(getAllWorksFailed());
  }
}
