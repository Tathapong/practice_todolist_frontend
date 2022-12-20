import InputText from "./InputText";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import { checkUsername } from "../validation/auth/validationUsername";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [usernameList, setUsernameList] = useState([]);
  const [emailList, setEmailList] = useState([]);

  const [error, setError] = useState({
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
    email: undefined
  });

  useEffect(() => {
    axios.get("http://localhost:8080/auth/username").then((res) => setUsernameList(res.data.usernameList));
  }, []);

  const handleRegister = async (ev) => {
    ev.preventDefault();
  };

  const onBlurUsername = () => {
    const { result, message } = checkUsername(username, usernameList);
    result ? setError({ ...error, username: "" }) : setError({ ...error, username: message });
  };

  const onBlurPassword = () => {};
  const onBlurConfirmPassword = () => {};
  const onBlurEmail = () => {};
  return (
    <form className="w-50 mx-auto border rounded-3  border-primary p-5 mt-5" onSubmit={handleRegister}>
      <h3 className="mb-5 text-center bold">Register</h3>

      <InputText
        name="Username"
        type="text"
        state={username}
        setState={setUsername}
        onBlur={onBlurUsername}
        error={error.username}
      />
      <InputText
        name="Password"
        type="password"
        state={password}
        setState={setPassword}
        onBlur={onBlurPassword}
        error={error.password}
      />
      <InputText
        name="Confirm Password"
        type="password"
        state={confirmPassword}
        setState={setConfirmPassword}
        onBlur={onBlurConfirmPassword}
        error={error.confirmPassword}
      />
      <InputText name="Email" type="email" state={email} setState={setEmail} onBlur={onBlurEmail} error={error.email} />

      <Button name="SIGN UP" type="submit" />
      <small className="me-2">Already a user?</small>
      <Link to="/login">LOGIN</Link>
    </form>
  );
}

export default RegisterForm;
