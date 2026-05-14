// import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx"
import { FavoritesProvider } from "../src/context/FavoritesContext";
import Navbar from "./components/Navbar.tsx";

// import "./styles/global.css";

function App() {
  return (
    <FavoritesProvider>
    <BrowserRouter>
    <Navbar />
    <main className="container">
      <h1>APP File is working</h1>;
        <AppRoutes />
        </main>
    </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
