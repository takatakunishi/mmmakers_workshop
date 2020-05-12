import { takeLatest } from "redux-saga/effects";
import { GETALLWORKS_REQUEST, GETEACHWORK_REQUEST, POST_WORK_REQUEST } from "../../actions/Works/ActionType";
import { getAllWorksSaga } from "./GetAllWorks";
import { getEachWorkSaga } from "./GetEachWork";
import { postWorkSaga } from "./PostWork";



const getWorksDataSaga = [
  takeLatest(GETALLWORKS_REQUEST, getAllWorksSaga),
  takeLatest(GETEACHWORK_REQUEST, getEachWorkSaga),
  takeLatest(POST_WORK_REQUEST, postWorkSaga),
]

export default getWorksDataSaga;
