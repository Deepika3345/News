import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sports from './Pages/Sports'
import Business from './Pages/Business'
import Politics from './Pages/Politics'
import PageNotFound from './Pages/PageNotFound'
import { NewsProvider } from './Context/NewsContext'

import AllNews from './Pages/AllNews'
import Carousel from './Pages/Carousel'
import Weather from './Components/Weather'


const App = () => {
  return (
    <Router>
      <NewsProvider>
        <Navbar />
        <div className="container p-3">

          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path="/home" element={<AllNews />} />
            <Route path='/' element={<Sports />} />
            <Route path='/business' element={<Business />} />
            <Route path='/politics' element={<Politics />} />
            <Route path='/weather' element={<Weather/>} />
          </Routes>
        </div>



      </NewsProvider>


    </Router>
  )
}

export default App