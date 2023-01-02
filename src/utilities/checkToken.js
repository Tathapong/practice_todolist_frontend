import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

const checkToken = async () => {
  const todo_token = cookies.get("todo_token");
  if (todo_token) {
    const result = await axios.post("http://localhost:8080/auth/checkToken", { todo_token });
    return { verify: result.data.verify, userId: result.data.userId };
  } else return { verify: false, userId: undefined };
};
export default checkToken;
