import React from "react"
import { connect } from "react-redux"
import ButtonToggle from "../../../Components/ButtonToggle/ButtonToggle"
import {
  setCurrentStep,
  setIndexCurrentStep,
} from "../../../Redux/store/step/step.actions"

type FormPageContentProps = {
  arraySteps: any,
  indexCurrentStep: number,
  currentStep: any,
  dispatch: any,
}

const FormPageContent: React.FunctionComponent<FormPageContentProps> = ({
  arraySteps,
  indexCurrentStep,
  currentStep,
  dispatch,
}) => {
  const handleDecrementClick = () => {
    if (indexCurrentStep >= 0) {
      dispatch(setIndexCurrentStep(indexCurrentStep - 1))
      dispatch(setCurrentStep(indexCurrentStep - 1))
    }
  }

  const handleIncrementClick = () => {
    if (arraySteps && indexCurrentStep <= arraySteps.length - 1) {
      dispatch(setIndexCurrentStep(indexCurrentStep + 1))
      dispatch(setCurrentStep(indexCurrentStep + 1))
    }
  }

  // const handleChangeStep = (e: any) => {
  //   // dispatch(setCurrentStep(id))
  // }

  return (
    <div className={"form-page__content"}>
      <div className={"form-page__content-data"}></div>
      <div className={"form-page__content-tools"}>
        {indexCurrentStep !== 0 && (
          <ButtonToggle handleDecrementClick={handleDecrementClick}>
            prev
          </ButtonToggle>
        )}
        {indexCurrentStep !== arraySteps.length - 1 && (
          <ButtonToggle handleIncrementClick={handleIncrementClick}>
            next
          </ButtonToggle>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  arraySteps: state.step.arraySteps,
  currentStep: state.step.currentStep,
  indexCurrentStep: state.step.indexCurrentStep,
})

export default connect(mapStateToProps)(FormPageContent)
