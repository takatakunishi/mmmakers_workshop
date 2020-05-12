import { postWork } from "../../apis/Works/PostWork";
import { call, put } from 'redux-saga/effects';
import { postWorkSuccess, postWorkFailed } from "../../actions/Works/ActionCreater";
import { resetContent } from '../../actions/Upload/ActionCreator';
export function* postWorkSaga(postData) {
    const auther = postData.postData[0];
    const title = postData.postData[1];
    const url = postData.postData[2];
    const description = postData.postData[3];
    const response = yield call(postWork, { auther, title, url, description });

    if (response.status === 200 && response.data) {
        yield put(postWorkSuccess(response.data));
        yield put(resetContent());
    } else if (response.status === 400) {
        yield put(postWorkFailed());
    } else {
        yield put(postWorkFailed());
    }
}
