import {Dog} from '../interfaces/dog.interface';
import {Card} from './Card';
import {IconRedHeart} from './IconRedHeart';

interface FavoritesProp {
  favoritesDogs: Dog[];
  removeFromFavorites?: (id: string) => void;
}

export const Favorites = ({
  favoritesDogs,
  removeFromFavorites,
}: FavoritesProp) => {
  return (
    <>
      <div className="flex items-center gap-6 mb-10">
        <IconRedHeart />
        <p className="font-nunito-sans font-bold text-2xl">Favorites</p>
      </div>
      <div className="grid grid-cols-3 pb-10 gap-1">
        {favoritesDogs.map((el) =>
          el.isFavorite ? (
            <Card
              key={el.id}
              el={el}
              isOnFav={el.isFavorite}
              removeFromFavorites={removeFromFavorites}
              favoritesDogs={favoritesDogs}
            />
          ) : (
            ''
          )
        )}
      </div>
    </>
  );
};
