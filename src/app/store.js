import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "../features/swapi/swapiSlice";
import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
    todos: todosReducer,
  },
});
