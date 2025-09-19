import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Footer from '../layout/footer/Footer'
import Navbar from '../layout/Navbar/Navbar'
import Home from '../pages/Home Page/Home'
import Process from '../pages/Process Page/Process'
import About from '../pages/About Page/About'
import Work from '../pages/Works Page/Work'
import Service from '../pages/Services Page/Service'
import Contactpage from '../pages/Contact/Contact'
import Careers from '../pages/Careers/Careers'

const AppRoutes = () => {
  return (
    <>
    {/* navbar */}
    <Navbar/>
    {/* routes */}
    <Routes>
        <Route path='/' index  element={<Home/>}></Route>
        <Route path='/services' element={<Service/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/process' element={<Process/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/careers' element={<Careers/>}></Route>
        <Route path='/contact' element={<Contactpage/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default AppRoutes