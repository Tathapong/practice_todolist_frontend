import InputText from "./InputText";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="w-50 mx-auto border rounded-3  border-primary p-5 mt-5" onSubmit={handleRegister}>
      <h3 className="mb-5 text-center bold">Login</h3>

      <InputText name="Username" state={username} setState={setUsername} />
      <InputText name="Password" type="password" state={password} setState={setPassword} />
      <Button name="LOGIN" type="submit" />
      <span className="me-2">Need an account?</span>
      <Link to="/register">Sign up</Link>
    </form>
  );
}

export default LoginForm;
