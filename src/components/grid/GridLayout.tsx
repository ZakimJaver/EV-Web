import MenuCard from "../shared/MenuCard"

type GridLayoutProps = {
    items: RoutePaths[]
}

type RoutePaths = {
    route: string,
    label: string
}

const GridLayout = ({ items }: GridLayoutProps) => {
    if (!items) return
    return (
        <div className="flex flex-col h-screen w-screen">
            <div className="h-24 bg-black">
                <h1 className="text-white">Menu Items</h1>
            </div>
            <div className='grid-container'>
                {items?.map((item: RoutePaths) => {
                    return (
                        <MenuCard key={item.label} route={item.route} label={item.label} />
                    )
                })}
            </div>
        </div>
    )
}

export default GridLayout
/*


                <div className='grid-card'>
                    {items?.map((item: RoutePaths) => {
                        return (
                            <MenuCard key={item.label} route={item.route} label={item.label} />
                        )
                    })}
                </div>

*/