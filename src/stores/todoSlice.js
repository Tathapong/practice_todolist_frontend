import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    getAllTodo: (state, action) => {
      state.todos = action.payload;
    },
    createTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    updateTodo: (state, action) => {
      const idx = state.todos.findIndex((item) => item.id === action.payload.id);
      if (idx !== -1)
        state.todos[idx] = { id: action.payload.id, title: action.payload.title, completed: action.payload.completed };
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    }
  }
});

//+ action creator
export const { getAllTodo, createTodo, updateTodo, deleteTodo } = todoSlice.actions;

// function fetchTodo(value) {
//   return { type: "todo/fetchTodo", payload: value };
// }

//+ reducer function
export default todoSlice.reducer;

//* todoSlice.reducer คือ reducer function ที่ export มาจาก createSlice ดังนี้

// function reducer(state, action) {
//   switch (action.type) {
//     case "todo/fetchTodo": {
//     }
//     case "todo/createTodo": {
//     }
//     case "todo/updateTodo": {
//     }
//     case "todo/deleteTodo": {
//     }
//   }
// }

//+ Thunk function
//* มีไว้ handle พวก Asynchronous function ใน reducer (ใน Reducer ไม่สามารถใช้ พวก Asynchornous ได้)
//* โดย ตัว dispatch () จะมองว่า argument เป็นอะไร หากเป็น Action object ({type : }) มันจะไปเรียก Reducer function เลยแต่ถ้าหากเป็น Function (Thunk function) มันจะเข้าไปทำใน Thunk function ก่อนแล้วค่อยไปทำ Reducer ต่อ (มเหมือนเป็น Middleware ของ React)
export function thunk_getAllTodo() {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:8080/todos", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      dispatch(getAllTodo(res.data.todos));
    } catch (err) {
      alert("error get all todo");
    }
  };
}

export function thunk_createTodo(title) {
  return async function (dispatch) {
    try {
      const res = await axios.post(
        "http://localhost:8080/todos",
        { title },
        { headers: { authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      dispatch(createTodo(res.data.todo));
    } catch (err) {
      alert("error create todo");
    }
  };
}

export function thunk_deleteTodo(id) {
  return async function (dispatch) {
    try {
      await axios.delete("http://localhost:8080/todos/" + id, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      dispatch(deleteTodo({ id }));
    } catch (err) {
      alert("error delete todo");
    }
  };
}
export function thunk_updateTodo(id, { title, completed }) {
  return async function (dispatch) {
    try {
      await axios.put(
        "http://localhost:8080/todos/" + id,
        { title, completed },
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      );

      dispatch(updateTodo({ id, title, completed }));
    } catch (err) {
      alert("error delete todo");
    }
  };
}
