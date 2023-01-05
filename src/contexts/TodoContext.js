import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();

  const createTodo = async (title) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/todos",
        { title },
        { headers: { authorization: "Bearer " + localStorage.getItem("token") } }
      );
      const cloneTodoList = [...todoList];
      const newTodolist = [res.data.todo, ...cloneTodoList];
      setTodoList(newTodolist);
    } catch (err) {
      alert("Error create todo");
    }
  };

  const removeTodo = async (id) => {
    try {
      await axios.delete("http://localhost:8080/todos/" + id, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") }
      });
      const newTodoList = todoList.filter((item) => item.id !== id);
      setTodoList(newTodoList);
    } catch (err) {
      alert("Error delete todo");
    }
  };

  const updateTodo = (newValue, id) => {
    // checkToken().then(({ verify, userId }) => {
    //   if (verify) {
    //     axios
    //       .put("http://localhost:8080/todolist", { id, newValue })
    //       .then((res) => {
    //         const idx = todoList.findIndex((el) => el.id === id);
    //         if (idx !== -1) {
    //           const clonedTodoList = [...todoList];
    //           clonedTodoList[idx] = { ...clonedTodoList[idx], ...newValue };
    //           setTodoList(clonedTodoList);
    //         }
    //       })
    //       .catch((err) => console.log(err));
    //   } else navigate("/login");
    // });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/todos", { headers: { authorization: "Bearer " + localStorage.getItem("token") } })
      .then((res) => {
        const todos = res.data.todos;
        setTodoList(todos);
      })
      .catch((err) => alert("Fetch todo error"));
  }, []);

  return (
    <TodoContext.Provider value={{ todoList, createTodo, removeTodo, updateTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
}

const useTodo = () => {
  return useContext(TodoContext);
};

export { TodoContext, TodoContextProvider, useTodo };
