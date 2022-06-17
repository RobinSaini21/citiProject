import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  START_LOADER,
  STOP_LOADER,
  LOGIN_START,
} from "../ActionTypes/authActionTypes";

export const startloader = () => ({
  type: START_LOADER,
});

export const stoploader = () => ({
  type: STOP_LOADER,
});

export const loginsucces = (data) => ({
  type: LOGIN_SUCCESS,
  payload: {
    data: data,
  },
});

export const registersuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: {
    data: data,
  },
});

export const loginfailed = () => ({
  type: LOGIN_FAILED
});

export const registerfailed = (data) => ({
  type: REGISTER_FAILED,
  payload: {
    data: data,
  },
});

export const loginstart = () =>({
  type: LOGIN_START
})
