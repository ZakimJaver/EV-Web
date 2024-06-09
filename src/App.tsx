import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./global.css"
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'

const App = () => {
  return (
        <main className='flex h-screen'>
            <Routes>
                <Route path='/auth' element={ <AuthLayout />}/> 
                <Route index element={ <Home /> } />
            </Routes>
        </main>
    )
}

export default App 