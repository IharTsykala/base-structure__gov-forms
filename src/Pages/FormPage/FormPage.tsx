import React from "react"
import FormPageMenu from "./FormPageMenu/FormPageMenu"
import FormPageContent from "./FormPageContent/FormPageContent"

const FormPage: React.FunctionComponent = () => {
  return (
    <div className={"form-page"}>
      <FormPageMenu />
      <FormPageContent />
    </div>
  )
}

export default FormPage
