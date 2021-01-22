import React, { useEffect } from "react"
import { setCurrentStep } from "../../Redux/store/step/step.actions"

type StepItemProps = {
  id: string,
  name: string,
  currentStep: string,
  dispatch: any,
}

const StepItem: React.FunctionComponent<StepItemProps> = ({
  id,
  name,
  currentStep,
  dispatch,
}) => {
  const handleChangeStep = (e: any) => {
    dispatch(setCurrentStep(id))
  }
  return (
    <div className={"step-item"}>
      <p
        className={`step-item__name ${id === currentStep ? "selected" : ""}`}
        onClick={(e) => handleChangeStep(e)}
      >
        {name}
      </p>
    </div>
  )
}

export default StepItem
