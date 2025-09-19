
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { HeroUIProvider } from "@heroui/react";

function App() {


  return (
    <>
      <HeroUIProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HeroUIProvider>
    </>
  )
}

export default App
