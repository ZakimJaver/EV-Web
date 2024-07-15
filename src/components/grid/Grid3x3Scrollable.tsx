import { useState } from 'react'
import { ScrollArea } from '../ui/scroll-area';

type GridArray = {
    selectedData: string,
    data: string[]
  }
  
  type GridArrayProps = GridArray & {
    updateFields: (field: string) => void
  }

const Grid3x3Scrollable = ({
    data,
    selectedData,
    updateFields
}: GridArrayProps) => {

    const [selectedType, setSelectedType] = useState<string | null>(selectedData);

    const handleSelection = (type: string) => {
        setSelectedType(type);
        updateFields(type)
    }

    return (
        <ScrollArea className="grid-scroll-area-container">
            <div className="grid-3x3-scrollable-container">

                {data.map((type) => (
                    <div
                        key={type}
                        className={`box  ${selectedType === type ? 'menu-card-selected' : 'menu-card hover:animate-pulse'}`}
                        onClick={() => handleSelection(type)}
                    >
                        {type}
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
}

export default Grid3x3Scrollable
