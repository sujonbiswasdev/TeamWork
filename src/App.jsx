
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { HeroUIProvider } from "@heroui/react";
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
      <Home />

    </>
  )
}

export default App
