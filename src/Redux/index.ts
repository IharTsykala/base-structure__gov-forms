import { combineReducers } from "redux"
import { stepReducer } from "./store/step/step.reducer"
// import { formReducer } from "./store/step/step.reducer"

export default combineReducers({
  step: stepReducer,
})
