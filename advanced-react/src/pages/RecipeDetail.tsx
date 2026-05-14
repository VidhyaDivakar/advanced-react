import { useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

import type { MealResponse } from "../types/mealTypes"



const RecipeDetail = () => {
  const { recipeId } = useParams();
  const url =
    recipeId
      ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      : "";

  const { addFavorite, removeFavorite, isFavorite } =
    useFavorites();

  const { data, loading, error } =
    useFetch<MealResponse>(url);

  if (!recipeId) {
    return <h2>Invalid Recipe ID</h2>;
  }

  if (loading) return <Spinner />;

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const meal = data?.meals[0];

  if (!meal) return <h2>No Recipe Found</h2>;

  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width="300"
      />

      <h1>{meal.strMeal}</h1>

      <button
        onClick={() =>
          isFavorite(recipeId)
            ? removeFavorite(recipeId)
            : addFavorite(recipeId)
        }
      >
        {isFavorite(recipeId!)
          ? "Remove Favorite"
          : "Add Favorite"}
      </button>
      console.log("recipeId:", recipeId);
      <h2>Ingredients</h2>

      <ul>
        {ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>

      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;