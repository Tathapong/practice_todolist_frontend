import InputText from "./InputText";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React from "react";

import ChbRememberMe from "./ChbRemeberMe";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState({ username: undefined, password: undefined });
  const [error2, setError2] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const navigate = useNavigate();
  const onBlurUsername = () => {
    if (username.length === 0) setError({ ...error, username: "Please enter your username" });
    else setError({ ...error, username: undefined });
  };
  const onBlurPassword = () => {
    if (password.length === 0) setError({ ...error, password: "Please enter your password" });
    else setError({ ...error, password: undefined });
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    const allError = error.username === undefined && error.password === undefined;
    if (allError) {
      axios.post("http://localhost:8080/auth/login", { username, password }).then((res) => {
        if (res.data.login) {
          setBtnDisabled(true);
          setError2("");
          const id = res.data.id;
          if (remember) localStorage.setItem("token", res.data.token);
          setBtnDisabled(false);
          navigate("/todolist/" + id);
        } else {
          setError2("Username or password wrong!");
        }
      });
    }
  };
  return (
    <form className="w-50 mx-auto border rounded-3  border-primary p-5 mt-5" onSubmit={handleLogin}>
      <h3 className="mb-5 text-center bold">Login</h3>
      <InputText
        name="Username"
        type="text"
        state={username}
        setState={setUsername}
        error={error.username}
        onBlur={onBlurUsername}
      />
      <InputText
        name="Password"
        type="password"
        state={password}
        setState={setPassword}
        error={error.password}
        onBlur={onBlurPassword}
      />
      <ChbRememberMe setState={setRemember} />
      <Button name="LOGIN" type="submit" disabled={btnDisabled} />
      {error2 ? (
        <div className="text-danger">
          <i className="fa-solid fa-xmark me-2" />
          {error2}
        </div>
      ) : (
        ""
      )}
      <span className="me-2">Need an account?</span>
      <Link to="/register">Sign up</Link>
    </form>
  );
}

export default LoginForm;
