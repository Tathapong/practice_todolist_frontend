import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function HomePage() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("todo_token");
    if (token) navigate("/todolist");
    else navigate("/login");
  }, []);

  return <></>;
}

export default HomePage;
