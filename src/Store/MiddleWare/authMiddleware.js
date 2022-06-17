import {
  startloader,
  stoploader,
  loginsucces,
  loginfailed,
} from "../Actions/authActions";
import { authlogin } from "../../Services/authService";


export const login = (data) => {
  return async (dispatch) => {
    let timer;
    dispatch(startloader());
    return (() => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        const res = await authlogin();
        dispatch(stoploader());
        if (res && res.status === 200) {
          dispatch(loginsucces(res.data));
        } else {
          dispatch(loginfailed());
        }
      }, 25000);
    })();
  };
};
