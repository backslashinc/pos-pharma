import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Pages

import Home from './pages/home';
import Sales from './pages/sale'
import Register from './pages/register'
import Quotation from './pages/quotation'

 // Layouts
import Navbar from './components/navbar'
import TopNavbar from './components/top-navbar'

export default function App() {

  return (
    <div className="App">
      <div className="h-full flex">
      <Navbar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
      <TopNavbar />

        <div className="flex-1 flex items-stretch overflow-hidden">

      <BrowserRouter>
              <Routes>
                {/* Home */}
                <Route exact path="/" element={<Home/>} />
                {/* POS Routes */}
                <Route exact path="/sales" element={<Sales/>} />
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/quotation" element={<Quotation/>} />
              </Routes>
          </BrowserRouter>
          </div>
      </div>

      </div>
    </div>

  )
  
}

