import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface FavoriteContextType {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}


const FavoritesContext = createContext<FavoriteContextType | undefined>(undefined);
export const FavoritesProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [favorites, setFavorites] = useLocalStorage < string[]>(
        "favorites",
        [] 
);
const addFavorite = (id: string) => {
    setFavorites([...favorites, id]);
};
 const removeFavorite = (id: string) => {
    setFavorites(
      favorites.filter((fav) => fav !== id)
    );
  };

  const isFavorite = (id: string) => {
    return favorites.includes(id);
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

export default FavoritesContext;