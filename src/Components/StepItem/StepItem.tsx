import React, { useEffect } from "react"
import { setCurrentStep } from "../../Redux/store/step/step.actions"

type StepItemProps = {
  id: string,
  name: string,
  currentStep: any,
  dispatch: any,
}

const StepItem: React.FunctionComponent<StepItemProps> = ({
  id,
  name,
  currentStep,
  dispatch,
}) => {
  const handleChangeStep = (e: any) => {
    // dispatch(setCurrentStep(id))
  }
  return (
    <div
      className={`step-item ${
        id === currentStep.id ? "step-item_selected" : ""
      }`}
      onClick={(e) => handleChangeStep(e)}
    >
      <p className={`step-item__name`}>{name}</p>
    </div>
  )
}

export default StepItem
