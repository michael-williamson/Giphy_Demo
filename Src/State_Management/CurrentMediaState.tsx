import React, { useContext, useState } from "react";
import { Props } from "../../App";
import { GiphyMedia } from "@giphy/react-native-sdk";

const CurrentMediaContext = React.createContext<GiphyMedia | null>(null);
const CurrentMediaUpdaterContext = React.createContext<Function>(
  () => undefined
);
const FavoritesListContext = React.createContext<Array<GiphyMedia>>([]);
const FavoritesListContextUpdater = React.createContext<Function>(
  () => undefined
);

export const useCurrentMediaContext = () => useContext(CurrentMediaContext);
export const useCurrentMediaContextUpdater = () =>
  useContext(CurrentMediaUpdaterContext);
export const useFavoritesListContext = () => useContext(FavoritesListContext);
export const useFavoritesListContextUpdater = () =>
  useContext(FavoritesListContextUpdater);

export const CurrentMediaState: React.FC<Props> = ({ children }) => {
  const [media, setMedia] = useState<GiphyMedia | null>(null);
  const [favorites, setFavorites] = useState<Array<GiphyMedia>>([]);

  const favoritesUpdater: (item: GiphyMedia, add: Boolean) => void = (
    item,
    add
  ) => {
    if (add) {
      //quick check for matching item to prevent duplicates in favorites list
      !favorites.find((obj) => obj.id === item.id) &&
        setFavorites([...favorites, item]);
      return;
    }

    setFavorites([...favorites.filter((obj) => obj.id !== item.id)]);
  };

  return (
    <CurrentMediaContext.Provider value={media}>
      <CurrentMediaUpdaterContext.Provider value={setMedia}>
        <FavoritesListContext.Provider value={favorites}>
          <FavoritesListContextUpdater.Provider value={favoritesUpdater}>
            {children}
          </FavoritesListContextUpdater.Provider>
        </FavoritesListContext.Provider>
      </CurrentMediaUpdaterContext.Provider>
    </CurrentMediaContext.Provider>
  );
};
