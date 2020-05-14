import {
  GETALLWORKS_REQUEST, GETALLWORKS_SUCCESS, GETALLWORKS_FAILED,
  GETEACHWORK_REQUEST, GETEACHWORK_SUCCESS, GETEACHWORK_FAILED,
  POST_WORK_REQUEST, POST_WORK_SUCCESS, POST_WORK_FAIL
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



export const postWorkRequest = (postData, userInfo) => ({
  type: POST_WORK_REQUEST,
  postData,
  userInfo
});

export const postWorkSuccess = (returnedData) => ({
  type: POST_WORK_SUCCESS,
  returnedData
})

export const postWorkFailed = () => ({
  type: POST_WORK_FAIL
})