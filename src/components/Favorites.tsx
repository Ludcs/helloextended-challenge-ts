import {Dog} from '../interfaces/dog.interface';
import {IconRedHeart} from './IconRedHeart';

interface FavoritesProp {
  favorites: Dog[];
}

export const Favorites = ({favorites}: FavoritesProp) => {
  return (
    <>
      <div className="flex items-center gap-6 mb-10">
        <IconRedHeart />
        <p className="font-nunito-sans font-bold text-2xl">Favorites</p>
      </div>
      <div className="grid grid-cols-4 mb-10 gap-1">
        {favorites.map((el) => (
          <p>{el.image}</p>
        ))}
      </div>
    </>
  );
};
