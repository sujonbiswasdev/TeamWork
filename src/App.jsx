
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { HeroUIProvider } from "@heroui/react";
import Services from "./pages/Services Page/Services";

function App() {


  return (
    <>
      {/* <HeroUIProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HeroUIProvider> */}
      <Services/>

    </>
  )
}

export default App
