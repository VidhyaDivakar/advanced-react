import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx"
import { FavoritesProvider } from "../src/context/FavoritesContext";
import { Navbar } from "./components/Navbar.tsx";

import "./styles/global.css";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
      <div className="min-h-screen bg-gray-100 text-gray-900">

      </div>
      </BrowserRouter>
    </FavoritesProvider>
  )
  return (
    <>
      <h1>HI</h1>
    </>
  )
}

export default App
