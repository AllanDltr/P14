import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateEmployees } from './pages/CreateEmployees'
import { CurrentEmployees } from './pages/CurrentEmployees'

export const App = () => {
    return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CreateEmployees />} />
              <Route path="/current-employees" element={<CurrentEmployees />} />
            </Routes>
          </BrowserRouter>
        </div>
    )
}