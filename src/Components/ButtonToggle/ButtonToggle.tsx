import React from "react"
import { connect } from "react-redux"

import { Button } from "antd"

type ButtonToggleStepProps = {
  handleDecrementClick?: any,
  handleIncrementClick?: any,
  children: any,
  dispatch: any,
}

const ButtonToggleStep: React.FunctionComponent<ButtonToggleStepProps> = ({
  handleDecrementClick,
  handleIncrementClick,
  children,
  dispatch,
}) => {
  return (
    <div className={`button-toggle-step__${children}`}>
      <Button
        type="primary"
        onClick={
          handleDecrementClick ? handleDecrementClick : handleIncrementClick
        }
      >
        {children}
      </Button>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  //   stepNumber: state.step.current(),
})

export default connect(mapStateToProps)(ButtonToggleStep)
