import {IconRedHeart} from './IconRedHeart';
import {IconWhiteHeart} from './IconWhiteHeart';
import {Dog} from '../interfaces/dog.interface';
//import { Dispatch, SetStateAction } from 'react'
import {useState} from 'react';

interface CardProps {
  el: Dog;
  isOnFav: boolean;
  addToFavorites?: (id: string) => void;
  removeFromFavorites?: (id: string) => void;
}

export const Card = ({
  el,
  isOnFav,
  addToFavorites,
  removeFromFavorites,
}: CardProps) => {
  const [toggleFavorite, setToggleFavorite] = useState<boolean>(false);
  // useEffect(() => {
  //   setToggleFavorite(true);
  // }, [favoritesDogs, ]);
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
    <div className="relative cursor-pointer">
      <img className="w-40 h-40 rounded" src={el.image} alt="X" />
      {toggleFavorite || isOnFav ? (
        <div
          className="absolute bottom-2 right-2"
          onClick={() => {
            removeFromFavorites(el.id);
            setToggleFavorite(false);
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
