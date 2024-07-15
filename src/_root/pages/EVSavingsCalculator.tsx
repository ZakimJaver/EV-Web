import { useState, FormEvent } from "react"
import { useMultistepForm } from "./ev-calculator/useMultistepForm"
import { EvMake } from "./ev-calculator/EvMake"
import { Button } from "@/components/ui/button"
import { EvMileage } from "./ev-calculator/EvMileage"
import { EvVehicle } from "./ev-calculator/EvVehicle"

type FormData = {
  evType: string
  annualMileage: number
  vehicleType: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  evType: "",
  annualMileage: 15000,
  vehicleType: "",
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

  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      {title: "Select EV Make", element: <EvMake {...data} updateFields={updateFields} /> },
      {title: "Select Annual Mileage", element: <EvMileage {...data} updateFields={updateFields} />},
      {title: "Select Vehicle", element: <EvVehicle {...data} updateFields={updateFields} /> },
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert(`Successful Account Creation ${data.evType} 2: ${data.annualMileage} ${data.vehicleType}`)
  }

  return (
    <div className="ev-savings-calculator-container">
      <form onSubmit={onSubmit} className="form-wrapper-container">
        <div className="form-wrapper-title-container title-text">{step.title}</div>
        <div className="form-wrapper-content-container">{step.element}</div>
        <div className="form-wrapper-button-container">
          <div className="flex justify-between w-[75%]">
            <Button className="form-button-container" onClick={back} disabled={isFirstStep} type="button">Back</Button>
            <Button className="form-button-container">Next</Button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default EVSavingsCalculator

/*

<div style={{ position: "absolute", top: ".5rem", right: ".5rem", zIndex: 10 }} className="bg-red-600">
          {currentStepIndex + 1} / {steps.length}
        </div>
        */