import { takeLatest } from "redux-saga/effects";
import { GETALLWORKS_REQUEST } from "../../actions/Works/ActionType";
import { getAllWorksSaga } from "./GetAllWorks";

const getWorksDataSaga = [
  takeLatest(GETALLWORKS_REQUEST, getAllWorksSaga)
]

export default getWorksDataSaga;
