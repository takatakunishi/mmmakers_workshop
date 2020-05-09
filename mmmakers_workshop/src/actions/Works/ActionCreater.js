import { GETALLWORKS_REQUEST, GETALLWORKS_SUCCESS, GETALLWORKS_FAILED } from "./ActionType"

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

