import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  blog: blogReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
