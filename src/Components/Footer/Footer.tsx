import React from "react"
import { connect } from "react-redux"

type FooterProps = {
  dispatch: any,
}

const Footer: React.FunctionComponent<FooterProps> = ({ dispatch }) => {
  return <div className={"footer"}>Footer</div>
}

const mapStateToProps = (state: any) => ({
  //   stepNumber: state.step.current(),
})

export default connect(mapStateToProps)(Footer)
