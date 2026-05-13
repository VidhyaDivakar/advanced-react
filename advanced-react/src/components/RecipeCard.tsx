import { Link } from "react-router-dom";
import type { Meal } from "../types/mealTypes";

interface Props {
  recipe: Meal;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="card">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />

        <h3>{recipe.strMeal}</h3>
      </div>
    </Link>
  );
};

export default RecipeCard;