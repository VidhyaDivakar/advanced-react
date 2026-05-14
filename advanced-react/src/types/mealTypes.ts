export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;

   [key: string]: string | undefined;
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface MealResponse {
  meals: Meal[];
}

export interface CategoryResponse {
  categories: Category[];
}