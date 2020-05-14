import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILED } from "./ActionType"

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data
});

export const loginSuccess = (response, data) => ({
  type: LOGIN_SUCCESS,
  response,
  data
})

export const loginFailed = (data) => ({
  type: LOGIN_FAILED
})


export const registrationRequest = (data) => ({
  type: REGISTRATION_REQUEST,
  data
});

export const registrationSuccess = (response, data) => ({
  type: REGISTRATION_SUCCESS,
  response,
  data
})

export const registrationFailed = (data) => ({
  type: REGISTRATION_FAILED
})
