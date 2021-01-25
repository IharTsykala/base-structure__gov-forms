import { Action } from "../../interfacesAction/action.interface"
import { StepInterface } from "../../InterfacesEntity/stepItem.interface"

export const ActionTypes = {
  GET_ARRAY_STEPS: "[STEP] Get array steps",
  SET_ARRAY_STEPS: "[STEP] Set array steps",

  SET_CURRENT_STEP: "[STEP] Set current step",
  SET_INDEX_CURRENT_STEP: "[STEP] Set index current step",

  GET_FAILURE: "[getFailureAction] get failure action",
}

export const getArraySteps = (urlRequest: string): Action<any> => ({
  type: ActionTypes.GET_ARRAY_STEPS,
  payload: urlRequest,
})

export const setArraySteps = (arraySteps: any): Action<string> => ({
  type: ActionTypes.SET_ARRAY_STEPS,
  payload: arraySteps,
})

export const setCurrentStep = (indexCurrentStep: number): Action<number> => ({
  type: ActionTypes.SET_CURRENT_STEP,
  payload: indexCurrentStep,
})

export const setIndexCurrentStep = (
  indexCurrentStep: number
): Action<number> => ({
  type: ActionTypes.SET_INDEX_CURRENT_STEP,
  payload: indexCurrentStep,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
