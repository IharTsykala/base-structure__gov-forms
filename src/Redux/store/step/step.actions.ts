import { Action } from "../../interfacesAction/action.interface"
import { StepInterface } from "../../InterfacesEntity/stepItem.interface"

export const ActionTypes = {
  SET_CURRENT_STEP: "[PHOTO] Set form",
}

export const setCurrentStep = (stepNumber: string): Action<string> => ({
  type: ActionTypes.SET_CURRENT_STEP,
  payload: stepNumber,
})
