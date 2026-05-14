import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import type { Meal } from "../types/mealTypes";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface FavoritesContextType<T> {
  favorites: T[];
  addFavorite: (item: T) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext =
  createContext<
    FavoritesContextType<Meal> | undefined
  >(undefined);

interface Props {
  children: ReactNode;
}

export const FavoritesProvider = ({
  children,
}: Props) => {
  const [favorites, setFavorites] =
    useLocalStorage<Meal[]>("favorites", []);

  const addFavorite = (meal: Meal) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (item) => item.idMeal === meal.idMeal
      );

      if (exists) return prev;

      return [...prev, meal];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.filter((meal) => meal.idMeal !== id)
    );
  };

  const isFavorite = (id: string) => {
    return favorites.some(
      (meal) => meal.idMeal === id
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites must be used within FavoritesProvider"
    );
  }

  return context;
};