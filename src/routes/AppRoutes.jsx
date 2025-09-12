import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Footer from '../layout/footer/Footer'
import Navbar from '../layout/Navbar/Navbar'
import Home from '../pages/Home Page/Home'
import Services from '../pages/Services Page/Services'
import Work from '../pages/Works Page/Work'
import Process from '../pages/Process Page/Process'
import About from '../pages/About Page/About'

const AppRoutes = () => {
  return (
    <>
    {/* navbar */}
    <Navbar/>
    {/* routes */}
    <Routes>
        <Route path='/' index  element={<Home/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
        <Route path='/works' element={<Work/>}></Route>
        <Route path='/process' element={<Process/>}></Route>
        <Route path='/about' element={<About/>}></Route>
    </Routes>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default AppRoutes