import React from "react";
import { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";

export default function GoogleSignin() {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);
  const [user, setUser] = useState(undefined);

  const handleGoogleSignIn = (res) => {
    console.log(res);
    console.log(jwt_decode(res.credential));
    if (!res.clientId || !res.credential) return;

    // Implement your login mutations and logic here.
    // Set cookies, call your backend, etc.

    // setUser(val.data?.login.user);
  };
  const initializeGsi = () => {
    if (!window.google || gsiScriptLoaded) return;

    setGsiScriptLoaded(true);
    window.google.accounts.id.initialize({
      client_id: process.env.CLIENT_ID,
      callback: handleGoogleSignIn,
    });
  };
  useEffect(() => {
    if (user?._id || gsiScriptLoaded) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client?sensor=false";
    script.onload = initializeGsi;
    script.async = true;
    script.id = "google-client-script";
    document.querySelector("body")?.appendChild(script);

    return () => {
      window.google?.accounts.id.cancel();
      document.getElementById("google-client-script")?.remove();
    };
  }, [handleGoogleSignIn, initializeGsi, user?._id]);

  return (
    <>
      <button className={"g_id_signin btn google_btn w-100"}>
        <img className="d-md-none" src="/img/google_mob.svg" alt="" />
        <img className="d-md-inline d-none" src="/img/google_icon.svg" alt="" />
        Sign in with Google
      </button>

    </>
  );
}
