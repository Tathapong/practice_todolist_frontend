import { useState } from "react";
import Button from "../ui/Button";
import TodoInput from "./TodoInput";
import { useDispatch } from "react-redux";
import { thunk_deleteTodo, thunk_updateTodo } from "../../stores/todoSlice";

function Todo(props) {
  const { id, title, completed } = props;
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const closeEditing = () => {
    setIsEditing(false);
  };

  return (
    <li
      className={`list-group-item d-flex ${
        isEditing ? "flex-column" : "align-items-center"
      } p-3 bd-callout bd-callout-${completed ? "success" : "warning"}`}
    >
      {isEditing ? (
        <TodoInput id={id} title={title} completed={completed} closeEditing={closeEditing} />
      ) : (
        <>
          <span className="flex-grow-1" role="button" onClick={() => setIsEditing(true)}>
            {title}
          </span>
          <div className="btn-group">
            <Button
              color="outline-info"
              onClick={() => dispatch(thunk_updateTodo(id, { title, completed: !completed }))}
            >
              <i className={`fa-solid fa-toggle-${completed ? "on" : "off"}`} />
            </Button>
            <Button color="danger" onClick={() => dispatch(thunk_deleteTodo(id))}>
              <i className="fa-regular fa-trash-can" />
            </Button>
          </div>
        </>
      )}
    </li>
  );
}

export default Todo;
