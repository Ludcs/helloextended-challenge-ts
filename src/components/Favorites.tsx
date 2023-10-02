import {Dispatch, SetStateAction} from 'react';
import {Dog} from '../interfaces/dog.interface';
import {Card} from './Card';
import {IconRedHeart} from './IconRedHeart';

interface FavoritesProp {
  ramdonDogs: Dog[];
  setRamdonDogs: Dispatch<SetStateAction<Dog[]>>;
  removeFromFavorites?: (id: string, favorite: boolean) => void;
}

export const Favorites = ({ramdonDogs, removeFromFavorites}: FavoritesProp) => {
  return (
    <>
      <div className="flex items-center gap-6 mb-10">
        <IconRedHeart />
        <p className="font-nunito-sans font-bold text-2xl">Favorites</p>
      </div>
      <div className="grid grid-cols-3 pb-10 gap-1">
        {/* {ramdonDogs
          .filter((el) => el.isFavorite) // Mostrar solo elementos con isFavorite true
          .map((el) => (
            <Card
              key={el.id}
              el={el}
              removeFromFavorites={removeFromFavorites}
              isFavorite={el.isFavorite}
            />
          ))} */}
        {ramdonDogs.map((el) =>
          el.isFavorite ? (
            <Card
              key={el.id}
              el={el}
              removeFromFavorites={removeFromFavorites}
              isFavorite={el.isFavorite}
            />
          ) : (
            ''
          )
        )}
      </div>
    </>
  );
};
