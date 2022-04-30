import React from "react";
import "./Login.css";
import { provider, auth } from "./Firebase";
import { Button } from "@material-ui/core";

function Login() {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
