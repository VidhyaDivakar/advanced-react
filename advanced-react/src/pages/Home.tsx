import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import type { Category } from "../types/mealTypes";

interface CategoriesResponse {
  categories: Category[];
}

const Home = () => {
  const { data, loading, error } =
    useFetch<CategoriesResponse>(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

  if (loading) return <Spinner />;

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="grid">
      {data?.categories.map((category) => (
        <Link
          key={category.idCategory}
          to={`/category/${category.strCategory}`}
        >
          <div className="card">
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
            />

            <h2>{category.strCategory}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;