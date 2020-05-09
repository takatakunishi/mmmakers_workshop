import { all } from 'redux-saga/effects';
import loginUserSaga from './LoginUser';
import getWorksDataSaga from './Works';

export default function* rootSaga() {
    yield all([...loginUserSaga, ...getWorksDataSaga]);
}
