import { takeLatest } from "redux-saga/effects";
import { GETALLWORKS_REQUEST, GETEACHWORK_REQUEST } from "../../actions/Works/ActionType";
import { getAllWorksSaga } from "./GetAllWorks";
import { getEachWorkSaga } from "./GetEachWork";

const getWorksDataSaga = [
  takeLatest(GETALLWORKS_REQUEST, getAllWorksSaga),
  takeLatest(GETEACHWORK_REQUEST, getEachWorkSaga),
]

export default getWorksDataSaga;
