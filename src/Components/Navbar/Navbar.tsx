import React from "react"
import { connect } from "react-redux"

type NavbarProps = {
  dispatch: any,
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ dispatch }) => {
  return <div className={"navbar"}>Navbar</div>
}

const mapStateToProps = (state: any) => ({
  //   stepNumber: state.step.current(),
})

export default connect(mapStateToProps)(Navbar)
