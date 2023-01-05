import Todo from "./Todo";
import { useTodo } from "../../contexts/TodoContext";

function TodoList() {
  const ctx = useTodo();
  return (
    <ul className="list-group shadow mt-4">
      {ctx.todoList.map((el) => (
        <Todo key={el.id} id={el.id} title={el.title} completed={el.completed} />
      ))}
    </ul>
  );
}

export default TodoList;
