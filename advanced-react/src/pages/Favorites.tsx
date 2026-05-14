import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";
import type { Meal } from "../types/mealTypes";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (!favorites || favorites.length === 0) {
    return <h2>No favorites added yet</h2>;
  }

  return (
    <div>
      <h1>Favorites</h1>

      <div className="grid">
        {favorites.map((meal: Meal) => (
          <RecipeCard key={meal.idMeal} recipe={meal} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;