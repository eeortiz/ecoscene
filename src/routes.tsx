import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { BaseLayout } from './components/ui'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<BaseLayout />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  )
}

export default AppRoutes
