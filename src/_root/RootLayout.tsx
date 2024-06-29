import MenuOverlay from '@/components/shared/MenuOverlay'
import TopMenuBar from '@/components/shared/TopMenuBar'
import { Outlet } from 'react-router-dom'
import { useState } from "react";


const RootLayout = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className="home-container">
            <TopMenuBar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
            <Outlet />
        </div>
        
    )
}

export default RootLayout