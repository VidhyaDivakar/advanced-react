// import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx"
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar.tsx";

// import "./styles/global.css";

function App() {
  return (
    <FavoritesProvider>
    <BrowserRouter>
    <Navbar />
    <main className="container">
      <h1>Recipes for Life!!</h1>;
        <AppRoutes />
        </main>
    </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
