
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { HeroUIProvider } from "@heroui/react";

import Contactpage from "./pages/Contact/Contact";



import Hero from "./pages/Home Page/Hero";
import Home from "./pages/Home Page/Home";


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


    </>
  )
}

export default App
