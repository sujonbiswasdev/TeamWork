
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { HeroUIProvider } from "@heroui/react";
import Contactpage from "./pages/Contact/Contact";



function App() {


  return (
    <>
      {/* <HeroUIProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HeroUIProvider> */}

  
  <Contactpage/>
     
     

    </>
  )
}

export default App
