import { Dispatch, SetStateAction } from "react"
import MenuButton from "./MenuButton"

type TopMenuBarProps = {
    navbarOpen: boolean,
    setNavbarOpen: Dispatch<SetStateAction<boolean>>
}

const TopMenuBar = ({ navbarOpen, setNavbarOpen }: TopMenuBarProps) => {

    return (
        <div className="top-menu-bar">
            <MenuButton navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} /> 
            <h1 className="top-menu-bar-title">vestigezero</h1>
        </div>
    )
}

export default TopMenuBar