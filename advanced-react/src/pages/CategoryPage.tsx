import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { useFetch } from "../hooks/useFetch";
import type { Meal } from "../types/mealTypes";

interface MealsResponse {
  meals: Meal[];
}

const CategoryPage = () => {
  const { categoryName } = useParams();

  const { data, loading, error } =
    useFetch<MealsResponse>(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );

  if (loading) return <Spinner />;

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="grid">
      {data?.meals.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          recipe={meal}
        />
      ))}
    </div>
  );
};

export default CategoryPage;