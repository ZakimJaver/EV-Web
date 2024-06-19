import MenuCard from "../shared/MenuCard"
import TopMenuBar from "../shared/TopMenuBar"

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
        <div className="home-container">
            <TopMenuBar />
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