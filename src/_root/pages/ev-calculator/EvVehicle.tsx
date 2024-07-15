import Grid3x3Scrollable from "@/components/grid/Grid3x3Scrollable"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent,  DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger} from  "@/components/ui/dropdown-menu"

type VehicleData = {
  vehicleType: string
}

type VehicleDataProps = VehicleData & {
  updateFields: (fields: Partial<VehicleData>) => void
}

type EvVehicleInfo = {
  evID: string,
  evName: string,
  evImage: string,
  evPrice: number
}



export function EvVehicle({
  vehicleType,
  updateFields
}: VehicleDataProps) {
  const evVehicles: EvVehicleInfo[] = [myVehicle("Ev 1", 35000, "id1"), myVehicle("Ev 2", 95000, "id2"), myVehicle("Ev 3", 33000, "id3"), myVehicle("Ev 4", 45000, "id4"), myVehicle("Ev 5", 55000, "id5"), myVehicle("Ev 6", 65000, "id6"), myVehicle("Ev 7", 33000, "7d3"), myVehicle("Ev 8", 45000, "id8"), myVehicle("Ev 9", 55000, "id9")]

  const [data, setData] = useState<string[]>(evName(evVehicles))
  const [selectedData, setSelectedData] = useState(getEvName(vehicleType))
  const [position, setPosition] = useState("Alphabetical: Ascending")

  function myVehicle(name: string, price: number = 0, id: string = "", image: string = "",): EvVehicleInfo {
    return { evID: id, evName: name, evImage: image, evPrice: price }
  }

  function sortGrid(value: string) {
    setPosition(value)
    
    switch (value) {
      case "Alphabetical: Ascending":
        setData(evName(evVehicles.sort((a, b) => { 
          if (a.evName < b.evName) return -1 
          if (a.evName > b.evName) return 1
          else return 0
        })))
        break
      case "Alphabetical: Descending":
        setData(evName(evVehicles.sort((a, b) => { 
          if (a.evName > b.evName) return -1 
          if (a.evName < b.evName) return 1
          else return 0
        })))
        break
      case "Price: High to Low":
        setData(evName(evVehicles.sort((a, b) => a.evPrice - b.evPrice)))
        break
      case "Price: Low to High":
        setData(evName(evVehicles.sort((a, b) => b.evPrice - a.evPrice)))
        break
    }
  }

  //Sends only the ev name to the grid layout
  function evName(ev: EvVehicleInfo[]): string[] {
    return ev.map((item) => {
      return item.evName
    })
  }
  //get Ev Name
  function getEvName(id: string): string {
    const ev = evVehicles.find((a) => a.evID == id)

    if (ev != undefined) {
      return ev.evName
    } else {
      return ""
    }
  }
  //get ev id
  function getEvId(name: string): string {
    const ev = evVehicles.find((a) => a.evName == name)

    if (ev != undefined) {
      return ev.evID
    } else {
      return ""
    }
  }

  function updateEvType(updatedValue: string) {
    const evId = getEvId(updatedValue)
    setSelectedData(updatedValue)
    updateFields({ vehicleType: evId })
  }


  return (
    <div className="w-full h-full">
      <Grid3x3Scrollable selectedData={selectedData} data={data} updateFields={updateEvType} />
      <div className="absolute top-[-15px] right-12 z-10 titilliumWeb text-xl">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>{position}&#9660;</div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 bg-gray-800 text-white">
            <DropdownMenuLabel>Order</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={sortGrid}>
              <DropdownMenuRadioItem value="Alphabetical: Ascending">Alphabetical: Ascending</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Alphabetical: Descending">Alphabetical: Descending</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Price: High to Low">Price: High to Low</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Price: Low to High">Price: Low to High</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

/*
style={{ position: "absolute", top: ".5rem", right: "3.5rem", zIndex: 10 }}
<Button className="mt-[-20px]" type="button" onClick={() => {sortByPrice()}}>Click me</Button>
*/