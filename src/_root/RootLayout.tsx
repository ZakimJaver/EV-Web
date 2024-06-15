import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='w-full md:flex'>
        <h1>RootLayout</h1>
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default RootLayout