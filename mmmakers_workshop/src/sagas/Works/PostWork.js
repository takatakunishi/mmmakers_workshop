import { postWork } from "../../apis/Works/PostWork";
import { call, put } from 'redux-saga/effects';
import { postWorkSuccess, postWorkFailed } from "../../actions/Works/ActionCreater";
import { resetContent } from '../../actions/Upload/ActionCreator';
export function* postWorkSaga(data) {
    console.log(data);

    const auther = data.postData[0];
    const title = data.postData[1];
    const url = data.postData[2];
    const description = data.postData[3];
    const response = yield call(postWork, { auther, title, url, description }, data.userInfo);

    if (response.status === 200 && response.data) {
        yield put(postWorkSuccess(response.data));
        yield put(resetContent());
    } else if (response.status === 400) {
        yield put(postWorkFailed());
    } else {
        yield put(postWorkFailed());
    }
}
