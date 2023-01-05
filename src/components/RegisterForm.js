import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [input, setInput] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleSubmitForm = async (ev) => {
    ev.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/auth/register", input);
      alert("register success. please login to continue");
      navigate("/login");
    } catch (err) {
      alert("something wrong");
      console.log(err);
    }
  };

  return (
    <div className="mx-auto p-4 border border-1 bg-white mt-5 rounded-3 shadow" style={{ maxWidth: 600 }}>
      <form onSubmit={handleSubmitForm}>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            value={input.username}
            onChange={(ev) => setInput({ ...input, username: ev.target.value })}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            value={input.email}
            onChange={(ev) => setInput({ ...input, email: ev.target.value })}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            value={input.password}
            onChange={(ev) => setInput({ ...input, password: ev.target.value })}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            value={input.confirmPassword}
            onChange={(ev) => setInput({ ...input, confirmPassword: ev.target.value })}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
