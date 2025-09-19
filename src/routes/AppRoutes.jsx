import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Footer from '../layout/footer/Footer'
import Navbar from '../layout/Navbar/Navbar'
import Home from '../pages/Home Page/Home'
import Services from '../pages/Services Page/Services'
import Process from '../pages/Process Page/Process'
import About from '../pages/About Page/About'
// import Work from '../pages/Works Page/Work'
// import Cardpage from '../pages/Careers/Cardpage'
// import Contactpage from '../pages/Contact/Contact'


const AppRoutes = () => {
  return (
    <>
    {/* navbar */}
    <Navbar/>
    {/* routes */}
    <Routes>
        <Route path='/' index  element={<Home/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
        <Route path='/process' element={<Process/>}></Route>
        <Route path='/about' element={<About/>}></Route>
         {/* <Route path='/works' element={<Work/>}></Route>
         <Route path='/careers' element={<Cardpage/>}></Route> */}
          {/* <Route path='/contact' element={<Contactpage/>}></Route> */}
    </Routes>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default AppRoutes