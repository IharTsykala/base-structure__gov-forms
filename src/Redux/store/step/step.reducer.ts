import { formInterface } from "../../InterfacesEntity/form.interface"
import { ActionTypes } from "./step.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  currentStep: string;
}

const initialState: State = {
  currentStep: "step1",
}

export const stepReducer = (
  state: State = initialState,
  action: Action<number>
) => {
  switch (action.type) {
  case ActionTypes.SET_CURRENT_STEP:
    return {
      ...state,
      currentStep: action.payload,
    }
  default:
    return state
  }
}
