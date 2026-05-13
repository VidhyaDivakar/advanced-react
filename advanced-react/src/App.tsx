// import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx"
// //import { FavoritesContext } from "../src/context/FavoritesContext";
// //import { Navbar } from "./components/Navbar.tsx";

// import "./styles/global.css";

// function App() {
//   return (
//    // <FavoritesContext>
//       <BrowserRouter>
//       <div className="min-h-screen bg-gray-100 text-gray-900">

//       </div>
//       </BrowserRouter>
//    // </FavoritesContext>
//   )
//   return (
//     <>
//       <h1>HI</h1>
//     </>
//   )
// }

// export default App

function App() {
  return (
    <BrowserRouter>
      <h1>React Working</h1>;
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
