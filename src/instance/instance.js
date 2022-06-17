/** @format */

import axios from "axios";

export const instance = axios.create({
  baseURL: "localhost:4000",
});


const requestHandler = (request) => {
  if (store.getState().auth.userLoggedIn)
    request.headers.Authorization = `Basic ${store.getState().auth.auth_token}`;
  return request;
};

const responseHandler = (response) => {
  return response;
};

const logoutUser = (message)=>{
  store.dispatch({
    type: SET_AUTH_ERROR,
    message: message
  });
}

const errorHandler = async (error) => {
  if (error.response && error.response.status === 400) {
    if (error.response.data && error.response.data.status === 0) {
      
      try {
        store.dispatch({
          type: START_PAGE_LOADER,
        });
        const res = await refreshToken({});
        store.dispatch({
          type: STOP_PAGE_LOADER,
        });
        if (res.status === 200 && res.data) {
          if (res.data.status === 1) {
            store.dispatch({
              type: REFRESH_TOKEN,
              token: res.data.auth_token,
            });
            window.location.reload();
          }
        }
      } catch (err) {
        store.dispatch({
          type: STOP_PAGE_LOADER,
        });
       logoutUser("Sorry! something went wrong please login again");
      }
    } else {
      store.dispatch({
        type: STOP_PAGE_LOADER,
      });
      logoutUser(error.response.data.message);
    }
  }else if(error.response && error.response.status === 402){
    logoutUser(error.response.data.message);
  }
  return Promise.reject(error);
}

instance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);
instance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default instance;
