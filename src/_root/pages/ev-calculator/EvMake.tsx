import { FormWrapper } from "./FormWrapper"

type UserData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

const evMakeArray = ["Cadillac", "Ford", "GMC", "Tesla", "Toyota"]

export function EvMake() {
  return (
    <FormWrapper title="Select EV Make">
      <div className="w-32 h-32 bg-green-600">hi</div>

    </FormWrapper>
  )
}