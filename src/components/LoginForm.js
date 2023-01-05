import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useAuth();

  const handleSubmitForm = async (ev) => {
    ev.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/auth/login", { username, password });
      localStorage.setItem("token", result.data.token);
      authContext.setIsLogged(true);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto p-4 border border-1 bg-white mt-5 rounded-3 shadow" style={{ maxWidth: 600 }}>
      <form onSubmit={handleSubmitForm}>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" value={username} onChange={(ev) => setUsername(ev.target.value)} />
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
