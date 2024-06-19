type MenuCardProps = {
    route: String,
    label: String
}
const MenuCard = ({ route, label }: MenuCardProps) => {

    if (!label) return

    return (
        <div className="menu-card">
            <h1>{label}</h1>
        </div>
    )
}

export default MenuCard