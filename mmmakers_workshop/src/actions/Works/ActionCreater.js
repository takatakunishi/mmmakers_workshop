import {
  GETALLWORKS_REQUEST, GETALLWORKS_SUCCESS, GETALLWORKS_FAILED,
  GETEACHWORK_REQUEST, GETEACHWORK_SUCCESS, GETEACHWORK_FAILED
} from "./ActionType"

export const getAllWorksRequest = () => ({
  type: GETALLWORKS_REQUEST
});

export const getAllWorksSuccess = (data) => ({
  type: GETALLWORKS_SUCCESS,
  data
})

export const getAllWorksFailed = () => ({
  type: GETALLWORKS_FAILED
})

export const getEachWorkRequest = (data) => ({
  type: GETEACHWORK_REQUEST,
  data
});

export const getEachWorksSuccess = (data) => ({
  type: GETEACHWORK_SUCCESS,
  data
})

export const getEachWorkFailed = () => ({
  type: GETEACHWORK_FAILED
})


