import TopMenuBar from '@/components/shared/TopMenuBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className="home-container">
            <TopMenuBar />
            <Outlet />
        </div>
        
    )
}

export default RootLayout