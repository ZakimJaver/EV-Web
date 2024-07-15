type FormData = {
  evType: string
  annualMileage: number
  vehicleType: string
}

export function EvResults({
  evType,
  annualMileage,
  vehicleType
}: FormData) {
  return (
    <div className="flex flex-col justify-around items-center w-[95%] h-full border border-black">
      <h1>Data saved from user!</h1>
      <h1>evType: {evType}</h1>
      <h1>Annual Mileage: {annualMileage}</h1>
      <h1>Vehicle ID: {vehicleType}</h1>
    </div>
  )
}