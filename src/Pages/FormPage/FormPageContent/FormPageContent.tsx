import React from "react"

import { connect } from "react-redux"

type FormPageContentProps = {
  dispatch: any,
}

const FormPageContent: React.FunctionComponent<FormPageContentProps> = ({
  dispatch,
}) => {
  return <div className={"form-page__content"}></div>
}

const mapStateToProps = (state: any) => ({
  //   stepNumber: state.step.current(),
})

export default connect(mapStateToProps)(FormPageContent)
