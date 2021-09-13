import { combineReducers } from "redux";
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
    city: cityReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>

export default rootReducer;
