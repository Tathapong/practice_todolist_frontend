import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkToken from "../utilities/checkToken";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();

  const createTodo = (title) => {
    checkToken()
      .then(({ verify, userId }) => {
        if (verify) {
          axios
            .post("http://localhost:8080/todolist", { title, userId })
            .then((res) => {
              const newTodo = res.data.todo;
              const newTodoList = [newTodo, ...todoList];
              setTodoList(newTodoList);
            })
            .catch((err) => console.log(err));
        } else navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const removeTodo = (id) => {
    checkToken().then(({ verify, userId }) => {
      if (verify) {
        axios
          .delete("http://localhost:8080/todolist", { data: { id } })
          .then((res) => {
            const idx = todoList.findIndex((el) => el.id === id);
            if (idx !== -1) {
              const cloneTodoList = [...todoList];
              cloneTodoList.splice(idx, 1);
              setTodoList(cloneTodoList);
            }
          })
          .catch((err) => console.log(err));
      } else navigate("/login");
    });
  };

  const updateTodo = (newValue, id) => {
    checkToken().then(({ verify, userId }) => {
      if (verify) {
        axios
          .put("http://localhost:8080/todolist", { id, newValue })
          .then((res) => {
            const idx = todoList.findIndex((el) => el.id === id);
            if (idx !== -1) {
              const clonedTodoList = [...todoList];
              clonedTodoList[idx] = { ...clonedTodoList[idx], ...newValue };
              setTodoList(clonedTodoList);
            }
          })
          .catch((err) => console.log(err));
      } else navigate("/login");
    });
  };
  useEffect(() => {
    checkToken()
      .then(({ verify, userId }) => {
        if (verify) {
          axios
            .get("http://localhost:8080/todolist", { params: { userId } })
            .then((res) => setTodoList(res.data.todolist))
            .catch((err) => console.log(err));
        } else navigate("/login");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TodoContext.Provider value={{ todoList, createTodo, removeTodo, updateTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
