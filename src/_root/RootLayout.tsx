import { Button } from '@/components/ui/button'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const RootLayout = () => {

    return (
        <div className='w-full'>
            <h1>RootLayout</h1>

            <div className='md:flex flex-col gap-2'>
                
                <Link to="/browser">
                </Link>

                <Link to="/browser">
                    <Button
                        onClick={() => console.log("clicked 1")}>ZEV Browser</Button>
                </Link>
                <Link to="/ev-calculator">
                    <Button
                        onClick={() => console.log("clicked 2")}>EV Savings Calculator</Button>
                </Link>
                <Link to="/">
                    <Button
                        onClick={() => console.log("clicked 3")}>ZEV Home</Button>
                </Link>
                <Link to="/incentives">
                    <Button
                        onClick={() => console.log("clicked 4")}>ZEV Incentives</Button>
                </Link>
                <Link to="/industry-map">
                    <Button
                        onClick={() => console.log("clicked 5")}>ZEV Industry Map</Button>
                </Link>
                <Link to="/service-provider">
                    <Button
                        onClick={() => console.log("clicked 6")}>ZEV Service Provider</Button>
                </Link>
                <Link to="/sustainability-tracker">
                    <Button
                        onClick={() => console.log("clicked 7")}>ZEV Sustainability Tracker</Button>
                </Link>

            </div>

            <section className='bg-yellow-500 m-8'>
                <Outlet />
            </section>
        </div>
    )
}

export default RootLayout