const { categoryName } = useParams ();

const { data } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php?c=${categoryName}`
)