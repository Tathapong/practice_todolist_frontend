import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RegCompletePage from "./pages/RegCompletePage";
import TodolistPage from "./pages/TodolistPage";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="register/completed" element={<RegCompletePage />} />
      <Route path="todolist" element={<TodolistPage />} />
      <Route index element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
