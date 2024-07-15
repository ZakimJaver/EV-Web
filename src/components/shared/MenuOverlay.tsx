import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"
import { menuLinks } from '@/constants'

type MenuOverlayProps = {
    navbarOpen: boolean,
    setNavbarOpen: Dispatch<SetStateAction<boolean>>
}

type RoutePaths = {
    route: string,
    label: string
}

const MenuOverlay = ({ navbarOpen, setNavbarOpen }: MenuOverlayProps) => {
    return (
        <nav
            className={`top-menu-overlay ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}
        >
            <ul className="w-full flex flex-col items-start">
                {menuLinks.map((item: RoutePaths) => {
                    return (
                        <li className="nav-li" key={item.label}>
                            <div className="w-full"></div>
                            <div className="w-full bg-red h-full">
                                <Link 
                                to={`${item.route}`} 
                                className="nav-link"
                                onClick={() => setNavbarOpen(false)}
                                >
                                    <h1 className="text-white">{item.label}</h1>
                                </Link>
                            </div>
                            <div className="w-full bg-red"></div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default MenuOverlay