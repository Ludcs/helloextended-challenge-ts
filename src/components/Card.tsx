import {IconRedHeart} from './IconRedHeart';
import {IconWhiteHeart} from './IconWhiteHeart';
import {Dog} from '../interfaces/dog.interface';
import {useState} from 'react';

interface CardProps {
  el: Dog;
  addToFavorites?: (id: string) => void;
  removeFromFavorites?: (id: string, favorite: boolean) => void;
  isFavorite: boolean;
}

export const Card = ({
  el,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}: CardProps) => {
  const [toggleFavorite, setToggleFavorite] = useState<boolean>(false);

  // const handleFavorite = (id: string) => {
  //   if (addToFavorites) {
  //     addToFavorites(id);
  //     setToggleFavorite(true);
  //   }
  //   if (removeFromFavorites) {
  //     setToggleFavorite(false);
  //     removeFromFavorites(id);
  //   }
  // };

  return (
    <div
      className="relative cursor-pointer"
      //onClick={() => handleFavorite(el.id)}
    >
      <img className="w-40 h-40 rounded" src={el.image} alt="X" />
      {toggleFavorite || isFavorite ? (
        <div
          className="absolute bottom-2 right-2"
          onClick={() => {
            removeFromFavorites(el.id, el.isFavorite), setToggleFavorite(false);
          }}
        >
          <IconRedHeart />
        </div>
      ) : (
        <div
          className="absolute bottom-2 right-2"
          onClick={() => {
            addToFavorites(el.id);
            setToggleFavorite(true);
          }}
        >
          <IconWhiteHeart />
        </div>
      )}
    </div>
  );
};
