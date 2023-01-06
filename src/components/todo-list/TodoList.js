import Todo from "./Todo";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunk_getAllTodo } from "../../stores/todoSlice";

function TodoList() {
  const todoList = useSelector((state) => {
    return state.todo.todos;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunk_getAllTodo());
  }, [dispatch]);

  return (
    <ul className="list-group shadow mt-4">
      {todoList.map((el) => (
        <Todo key={el.id} id={el.id} title={el.title} completed={el.completed} />
      ))}
    </ul>
  );
}

export default TodoList;
