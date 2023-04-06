import React from "react";
import logo from "../Icons/logo.svg";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [repeatValue, setRepeatValue] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [repeatDirty, setRepeatDirty] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatError, setRepeatError] = useState("");

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
    setPasswordValue(e.target.value);
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

  const repeatCheck = (e) => {
    setRepeatValue(e.target.value);
  };

  const blurCheck = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "repeat":
        setRepeatDirty(true);
    }
    if (passwordValue == repeatValue) {
      setRepeatError("");
      setRepeat(true);
    } else {
      setRepeatError("Passwords don't match");
      setRepeat(false);
    }
  };
  return (
    <div className="MainCard">
      <img src={logo} />
      <div className="Card">
        <h1>Sign Up</h1>
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
            value={passwordValue}
            type="password"
            name="password"
            placeholder="Password"
            onBlur={blurCheck}
            onChange={passwordCheck}
          />
          <h6>{repeatError}</h6>
          <input
            style={!repeat && repeatDirty ? { borderColor: "red" } : null}
            value={repeatValue}
            type="password"
            name="repeat"
            placeholder="Repeat password"
            onBlur={blurCheck}
            onChange={repeatCheck}
          />
          <a
            className="acc"
            href={email && password && repeat ? "/Home" : null}
          >
            Create an account
          </a>
          <p>
            Already have an account?<a href="/"> Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
