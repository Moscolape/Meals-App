import React, { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavouritesContextProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addFavorite = (id) => {
    // @ts-ignore
    setFavoriteIds((currentFavs) => [...currentFavs, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteIds((currentFavs) => currentFavs.filter((favId) => favId !== id));
  };

  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouritesContextProvider;