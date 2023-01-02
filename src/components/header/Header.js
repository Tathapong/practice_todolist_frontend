import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function Header() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const handleLogout = (ev) => {
    cookies.remove("todo_token");
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-end">
      <button className="btn btn-danger btn-sm mb-4" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Header;
