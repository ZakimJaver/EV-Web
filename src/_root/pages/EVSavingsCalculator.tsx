import { useState, FormEvent } from "react"
import { UserForm } from "./ev-calculator/UserForm"
import { useMultistepForm } from "./ev-calculator/useMultistepForm"
import { EvMake } from "./ev-calculator/EvMake"

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function EVSavingsCalculator() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <EvMake /> 
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert(`Successful Account Creation ${data.firstName}`)
  }

  return (
    <div className="ev-savings-calculator-container">
      <form onSubmit={onSubmit} className="form-wrapper-container">
        <div className="form-wrapper-title-container title-text">Header</div>
        <div className="form-wrapper-content-container">content</div>
        <div className="form-wrapper-button-container">
          <div>Back</div>
          <div>Next</div>
        </div>
      </form>
    </div>
  )
}


export default EVSavingsCalculator

/*

{
        //step
        <EvMake />
        }
        <div className="ev-savings-calculator-button-container">
          {!isFirstStep && ( <button type="button" onClick={back}>Back</button>)}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>


        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        */