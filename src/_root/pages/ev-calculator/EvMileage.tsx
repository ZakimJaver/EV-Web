import { Slider } from "@/components/ui/slider";

type MileageData = {
  annualMileage: number
}

type MileageDataProps = MileageData & {
  updateFields: (fields: Partial<MileageData>) => void
}

export function EvMileage({
  annualMileage,
  updateFields
}: MileageDataProps) {

  function updateSValue(newVal: number[]) {
    updateFields({ annualMileage: newVal[0] })
  }

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (

    <div className="flex flex-col justify-around items-center w-full h-full">
      <div className="flex flex-col w-full items-center">

        <div className="w-[95%] border border-black p-[2px]">
          <Slider defaultValue={[ annualMileage ]} max={100000} step={1000} onValueChange={updateSValue} />
        </div>
        <h1 className="title-text pt-8">{numberWithCommas(annualMileage)} km</h1>
      </div>
      <div>
        <h1 className="text-3xl italic">Daily average: 42km</h1>
      </div>
    </div>
  )
}