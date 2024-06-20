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
        <div className='grid-container'>
            {items?.map((item: RoutePaths) => {
                return (
                    <MenuCard key={item.label} route={item.route} label={item.label} />
                )
            })}
        </div>
    )
}

export default GridLayout