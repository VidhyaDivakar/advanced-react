import { useSearchParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { useFetch } from "../hooks/useFetch";
import type { Meal } from "../types/mealTypes";

interface SearchResponse {
  meals: Meal[] | null;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data, loading, error } = useFetch<SearchResponse>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  if (loading) return <Spinner />;

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!data || !data.meals) {
    return <h2>No recipes found for "{query}"</h2>;
  }

  return (
    <div className="grid">
      {data.meals.map((meal) => (
        <RecipeCard key={meal.idMeal} recipe={meal} />
      ))}
    </div>
  );
};

export default SearchResults;