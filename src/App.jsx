
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { HeroUIProvider } from "@heroui/react";

import Contactpage from "./pages/Contact/Contact";



import Hero from "./pages/Home Page/Hero";
import Home from "./pages/Home Page/Home";
import Services from "./pages/Services Page/Services";



function App() {


  return (
    <>
      {/* <HeroUIProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HeroUIProvider> */}


  
  <Contactpage/>
     
     

      <Home />
    <Services/>


    </>
  )
}

export default App
