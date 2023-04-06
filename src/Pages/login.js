import React from "react";
import "./login.css";
import logo from "../Icons/logo.svg";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailCheck = (e) => {
    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (String(e.target.value).toLowerCase().match(validateEmail)) {
      setEmail(true);
      setEmailError("");
    } else if (e.target.value.length == 0) {
      setEmail(false);
      setEmailError("Can't be empty");
    } else {
      setEmailError("Invalid email");
      setEmail(false);
    }
  };

  const passwordCheck = (e) => {
    if (e.target.value.length >= 8) {
      setPassword(true);
      setPasswordError("");
    } else if (e.target.value.length == 0) {
      setPassword(false);
      setPasswordError("Can't be empty");
    } else {
      setPassword(false);
      setPasswordError("It should contain at least 8 charachters");
    }
  };

  const blurCheck = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className="MainCard">
      <img src={logo} />
      <div className="Card">
        <h1>Login</h1>
        <form>
          <h6>{emailError}</h6>
          <input
            style={!email && emailDirty ? { borderColor: "red" } : null}
            type="email"
            name="email"
            placeholder="Email address"
            onBlur={blurCheck}
            onChange={emailCheck}
          />
          <h6>{passwordError}</h6>
          <input
            style={!password && passwordDirty ? { borderColor: "red" } : null}
            type="password"
            name="password"
            placeholder="Password"
            onBlur={blurCheck}
            onChange={passwordCheck}
          />
          <a className="acc" href={email && password ? "/Home" : null}>
            Login to your account
          </a>
          <p>
            Don’t have an account?<a href="/SignUp"> Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
