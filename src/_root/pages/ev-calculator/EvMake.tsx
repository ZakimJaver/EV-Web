import Grid3x3Scrollable from "@/components/grid/Grid3x3Scrollable"

type EvMakeData = {
  evType: string
}

type EvMakeDataProps = EvMakeData & {
  updateFields: (fields: Partial<EvMakeData>) => void
}

const evTypes: string[] = [
  'Sedan', 'Minivan', 'Hatchback', 'SUV', 'Coupe', 'Wagon', 'Crossover', 'Truck', 'Undecided',
];



export function EvMake({
  evType,
  updateFields
}: EvMakeDataProps) {


  function updateEvType(updatedValue: string){
    updateFields({evType: updatedValue})
  }


  return (
    <Grid3x3Scrollable selectedData={evType} data={evTypes} updateFields={updateEvType} />
  )
}