import { all } from 'redux-saga/effects';
import loginUserSaga from './LoginUser';

export default function* rootSaga() {
    yield all([ ...loginUserSaga]);
}
