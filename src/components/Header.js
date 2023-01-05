import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const navigate = useNavigate();
  const authContext = useAuth();

  const handleClickLogout = (ev) => {
    ev.preventDefault();
    localStorage.clear("token");
    authContext.setIsLogged(false);
    navigate("/login");
  };

  return (
    <nav class="navbar navbar-expand-sm nav-bar-dark bg-success">
      <div class="container-fluid">
        <Link class="navbar-brand text-light fs-5" href="#" to="/">
          Todo App
        </Link>
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            {localStorage.getItem("token") ? (
              <>
                <li class="nav-item">
                  <Link class="nav-link active text-light" href="#" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-bg-danger rounded-3" href="/" onClick={handleClickLogout}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <Link class="nav-link text-light" href="#" to="/login">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-light" href="#" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
