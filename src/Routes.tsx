import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Country from './pages/Country'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/country/:id" element={<Country />} />
  </Routes>
)

export default AppRoutes
