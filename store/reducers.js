import { createStore } from "redux"
const initialState = {
  isLogin: false,
  username: "Super"
}

export const AuthReducers = (state = initialState, { type, payload }) => {
  switch (action.type) {

    case "LOGIN":
      return {
        ...state,
        isLogin: payload,
      }
    default:
      return state
  }
}



export default createStore(AuthReducers)