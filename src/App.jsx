
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { HeroUIProvider } from "@heroui/react";
import Work from "./pages/Works Page/Work";

function App() {


  return (
    <>
      {/* <HeroUIProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HeroUIProvider> */}
      <Work/>

    </>
  )
}

export default App
