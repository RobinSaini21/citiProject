import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  SIGN_OUT,
  LOGIN_FAILED,
  REGISTER_FAILED,
  START_LOADER,
  STOP_LOADER,
} from "../ActionTypes/authActionTypes";

const initialState = {
  loading: false,
  userLoggedIn: false,
  userDetails: null,
  authError: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADER:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADER:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        userLoggedIn: true,
        userDetails: payload.data,
        authError: false,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        userLoggedIn: false,
        userDetails: null,
        authError: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userLoggedIn: true,
        userDetails: payload.data,
        authError: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        userLoggedIn: false,
        userDetails: null,
        authError: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        userLoggedIn: false,
        userDetails: null,
        authError: false,
      };
    default:
      return state;
  }
};
export default authReducer;
