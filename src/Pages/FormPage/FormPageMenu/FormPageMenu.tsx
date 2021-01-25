import React, { useEffect } from "react"
import { connect } from "react-redux"
// import fakeArraySteps from "../../../services/fakeArray"
import StepItem from "../../../Components/StepItem/StepItem"
import { getArraySteps } from "../../../Redux/store/step/step.actions"
import { StepInterface } from "../../../Redux/InterfacesEntity/stepItem.interface"

type FormPageMenuProps = {
  arraySteps: any,
  currentStep: string,
  dispatch: any,
}

const FormPageMenu: React.FunctionComponent<FormPageMenuProps> = ({
  arraySteps,
  currentStep,
  dispatch,
}) => {
  useEffect(() => {
    dispatch(getArraySteps(""))
  }, [dispatch])

  useEffect(() => {
    console.log(arraySteps)
  }, [arraySteps])

  return (
    <div className={"form-page__menu"}>
      {arraySteps &&
        arraySteps.length &&
        arraySteps.map((item: any) => (
          <StepItem
            key={item.id}
            id={item.id}
            name={item.name}
            currentStep={currentStep}
            dispatch={dispatch}
          />
        ))}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  arraySteps: state.step.arraySteps,
  currentStep: state.step.currentStep,
})

export default connect(mapStateToProps)(FormPageMenu)
