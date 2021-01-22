import React from "react"
import { connect } from "react-redux"
import fakeArraySteps from "../../../services/fakeArray"
import StepItem from "../../../Components/StepItem/StepItem"
import { StepInterface } from "../../../Redux/InterfacesEntity/stepItem.interface"

type FormPageMenuProps = {
  currentStep: string,
  dispatch: any,
}

const FormPageMenu: React.FunctionComponent<FormPageMenuProps> = ({
  currentStep,
  dispatch,
}) => {
  console.log(fakeArraySteps)
  return (
    <div className={"form-page__menu"}>
      {fakeArraySteps.length &&
        fakeArraySteps.map((item: any) => (
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
  currentStep: state.step.currentStep,
})

export default connect(mapStateToProps)(FormPageMenu)
