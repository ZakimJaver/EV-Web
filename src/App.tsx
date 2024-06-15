import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./global.css"
import { Browser, Home, Incentives, IndustryMap, ServiceProvider, SustainabilityTracker } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import EVSavingsCalculator from './_root/pages/EVSavingsCalculator'

const App = () => (
    <main className='flex h-screen'>
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/ev-calculator" element={<EVSavingsCalculator />} />
                <Route path="/browser" element={<Browser />} />
                <Route path="/incentives" element={<Incentives />} />
                <Route path="/industry-map" element={<IndustryMap />} />
                <Route path="service-provider" element={<ServiceProvider />} />
                <Route path="/sustainability-tracker" element={<SustainabilityTracker />} />
                <Route index element={<Home />} />
            </Route>

            <Route element={<AuthLayout />}>
            </Route>
        </Routes>
    </main>
)

export default App 