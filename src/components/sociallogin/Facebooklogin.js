import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function Facebooklogin() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <FacebookLogin
      appId="1088597931155576"
      autoLoad={false}
      callback={responseFacebook}
      render={(renderProps) => (
        <button
          type="button"
          onClick={renderProps.onClick}
          className="btn fb_btn w-100"
        >
          <img className="d-md-none" src="/img/fb_mob.svg" alt="" />
          <img className="d-md-inline d-none" src="/img/facebook_icon.svg" alt="" />
          Sign in with Facebook
        </button>
      )}
    />
  );
}

export default Facebooklogin;
