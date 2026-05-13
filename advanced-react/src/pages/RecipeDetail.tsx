import { useParams } from "react-router-dom";
const RecipeDetail = () => {
  const { recipeId } = useParams();

  const { addFavorite, removeFavorite, isFavorite } =
    useFavorites();

  const { data, loading, error } =
    useFetch<MealResponse>(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
    );

  if (loading) return <Spinner />;

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const meal = data?.meals[0];

  if (!meal) return <h2>No Recipe Found</h2>;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient) {
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
          isFavorite(recipeId!)
            ? removeFavorite(recipeId!)
            : addFavorite(recipeId!)
        }
      >
        {isFavorite(recipeId!)
          ? "Remove Favorite"
          : "Add Favorite"}
      </button>

      <h2>Ingredients</h2>

      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>

      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;