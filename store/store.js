import { createStore, combineReducers } from "redux";
import { AuthReducers } from "./reducers";

const rootReducer = combineReducers({
    userDate: AuthReducers
})

export const store = createStore(rootReducer)






