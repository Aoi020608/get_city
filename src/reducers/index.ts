import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import blogReducer from "./blogReducer";

export const rootReducer = combineReducers({
  city: cityReducer,
  blog: blogReducer,
});

export type RootType = ReturnType<typeof rootReducer>;
