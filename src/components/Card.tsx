import {useState} from 'react';
import {IconRedHeart} from './IconRedHeart';
import {IconWhiteHeart} from './IconWhiteHeart';
import {Dog} from '../interfaces/dog.interface';

interface CardProps {
  el: Dog;
  addToFavorites?: (id: string) => void;
  removeFromFavorites?: (id: string) => void;
}

export const Card = ({el, addToFavorites, removeFromFavorites}: CardProps) => {
  const [toggleFavorite, setToggleFavorite] = useState<boolean>(false);

  const handleFavorite = (id: string) => {
    if (addToFavorites) {
      addToFavorites(id);
    }
    setToggleFavorite(!toggleFavorite);
    if (toggleFavorite === false && removeFromFavorites) {
      removeFromFavorites(id);
    }
  };

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => handleFavorite(el.id)}
    >
      <img className="w-40 h-40 rounded" src={el.image} alt="X" />
      {toggleFavorite ? (
        <div className="absolute bottom-2 right-2">
          <IconRedHeart />
        </div>
      ) : (
        <div className="absolute bottom-2 right-2">
          <IconWhiteHeart />
        </div>
      )}
    </div>
  );
};
