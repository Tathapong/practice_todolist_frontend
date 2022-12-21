import regCompletedPic from "../img/regCompleted_1.jpg";
import { Link } from "react-router-dom";
function RegCompletePage() {
  return (
    <div>
      <img alt="pic" src={regCompletedPic} className="rounded mx-auto d-block w-50 mt-5"></img>
      <div className="text-center fs-2 text-secondary">Congratulations! Registration success!</div>
      <div className="text-center">
        <Link to="/login">
          <button className="btn btn-success btn-sm mx-2">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-secondary btn-sm mx-2">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default RegCompletePage;
