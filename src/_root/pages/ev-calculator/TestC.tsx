import Grid3x3Scrollable from "@/components/grid/Grid3x3Scrollable"
import { FormWrapper } from "./FormWrapper"

type EvMakeData = {
  lastName: string
}

type EvMakeDataProps = EvMakeData & {
  updateFields: (fields: Partial<EvMakeData>) => void
}

const evTypes: string[] = [
  'Sedan', 'Minivan', 'Hatchback', 'SUV', 'Coupe', 'Wagon', 'Crossover', 'Truck', 'Undecided',
];



export function TestC({
  lastName,
  updateFields
}: EvMakeDataProps) {


  function updateEvType(updatedValue: string){
    console.log("updated from EvMake: " + updatedValue)
    updateFields({lastName: updatedValue})
  }


  return (
    <Grid3x3Scrollable selectedData={lastName} data={evTypes} updateFields={updateEvType} />
  )
}