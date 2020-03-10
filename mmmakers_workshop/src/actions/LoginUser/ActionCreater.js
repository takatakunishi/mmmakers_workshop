import { LOGIN_REQUEST,  LOGIN_SUCCESS, LOGIN_FAILED, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILED } from "./ActionType"

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data
})

export const loginFailed = (data) => ({
 type: LOGIN_FAILED,
 data
})


export const registrationRequest = (data) => ({
  type: REGISTRATION_REQUEST,
  data
});

export const registrationSuccess = (data) => ({
  type: REGISTRATION_SUCCESS,
  data
})

export const registrationFailed = (data) => ({
 type: REGISTRATION_FAILED,
 data
})
