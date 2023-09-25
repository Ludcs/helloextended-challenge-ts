import {Dispatch, SetStateAction} from 'react';
import {Dog} from '../interfaces/dog.interface';
import {Card} from './Card';
import {IconRedHeart} from './IconRedHeart';

interface FavoritesProp {
  favorites: Dog[];
  setFavorites: Dispatch<SetStateAction<Dog[]>>;
}

export const Favorites = ({favorites, setFavorites}: FavoritesProp) => {
  const removeFromFavorites = (id: string) => {
    const isRemove = favorites.filter((el) => el.id !== id);
    setFavorites(isRemove);
  };

  return (
    <>
      <div className="flex items-center gap-6 mb-10">
        <IconRedHeart />
        <p className="font-nunito-sans font-bold text-2xl">Favorites</p>
      </div>
      <div className="grid grid-cols-3 pb-10 gap-1">
        {favorites.map((el) => (
          <Card el={el} removeFromFavorites={removeFromFavorites} />
        ))}
      </div>
    </>
  );
};
