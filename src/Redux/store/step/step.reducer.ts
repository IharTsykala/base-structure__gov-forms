import { formInterface } from "../../InterfacesEntity/form.interface"
import { ActionTypes } from "./step.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  arraySteps: any;
  currentStep: {};
  indexCurrentStep: number | null;
}

const initialState: State = {
  arraySteps: [],
  currentStep: { id: "step1" },
  indexCurrentStep: 0,
}

export const stepReducer = (
  state: State = initialState,
  action: Action<number>
) => {
  switch (action.type) {
  case ActionTypes.SET_ARRAY_STEPS:
    return {
      ...state,
      arraySteps: action.payload,
    }
  case ActionTypes.SET_CURRENT_STEP:
    return {
      ...state,
      // eslint-disable-next-line prettier/prettier
      currentStep: state.arraySteps[action.payload!],
    }
  case ActionTypes.SET_INDEX_CURRENT_STEP:
    return {
      ...state,
      indexCurrentStep: action.payload,
    }
  default:
    return state
  }
}
