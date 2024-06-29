import { Dispatch, SetStateAction } from 'react'

type MenuButtonProps = {
    navbarOpen: boolean,
    setNavbarOpen: Dispatch<SetStateAction<boolean>>
}

const MenuButton = ({ navbarOpen, setNavbarOpen }: MenuButtonProps) => {
    return (
        <button
            className="flex absolute z-20 ml-8 mt-2 w-14 h-12 text-white focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
        >

            <div className="relative w-8 transform -translate-x-8 -translate-y-1/2 left-1/2 top-1/2">
                <span
                    className={`absolute h-1 w-8 bg-white transform transition duration-300 ease-in-out ${navbarOpen ? "rotate-45 delay-200" : "-translate-y-2"
                        }`}
                ></span>
                <span
                    className={`absolute h-1 bg-white transform transition-all duration-200 ease-in-out ${navbarOpen ? "w-0 opacity-50" : "w-8 delay-200 opacity-100"
                        }`}
                ></span>
                <span
                    className={`absolute h-1 w-8 bg-white transform transition duration-300 ease-in-out ${navbarOpen ? "-rotate-45 delay-200" : "translate-y-2"
                        }`}
                ></span>
            </div>
        </button>
    )
}

export default MenuButton