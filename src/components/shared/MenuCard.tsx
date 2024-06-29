import { Link } from "react-router-dom"

type MenuCardProps = {
    route: String,
    label: String
}

const MenuCard = ({ route, label }: MenuCardProps) => {

    if (!label || !route) return

    return (
        <Link to={`${route}`} className="menu-card hover:animate-pulse">
            <h1>{label}</h1>
        </Link>
    )
}

export default MenuCard