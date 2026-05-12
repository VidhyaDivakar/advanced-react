import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import RecipeDetail from "../pages/RecipeDetail";
import Favorites from "../pages/Favorites";
import SearchResults from "../pages/SearchResults";

const AppRoutes = () => {
return (
    <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage />}/>
        <Route path="/receipe/: receipeId" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path ="/search" element={<SearchResults/>} />
    </Routes>
)
}

export default AppRoutes;