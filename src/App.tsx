import axios from 'axios';
import {SearchBar} from './components/SearchBar';
import {useState, useEffect} from 'react';
import {Dog} from './interfaces/dog.interface';
import {Card} from './components/Card';
import {Favorites} from './components/Favorites';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [ramdonDogs, setRamdonDogs] = useState<Dog[]>([]);
  const [favoritesDogs, setFavoritesDogs] = useState<Dog[]>([]);

  const getRamdonBreeds = async () => {
    try {
      const res = await axios.get(`https://dog.ceo/api/breeds/image/random/10`);
      setRamdonDogs(
        res.data.message.map((el: string) => {
          return {
            image: el,
            id: uuidv4(),
            isFavorite: false,
          };
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRamdonBreeds();
  }, []);

  const addToFavorites = (id: string) => {
    const exist = ramdonDogs.find((el) => el.id === id);
    if (exist) {
      setFavoritesDogs([...favoritesDogs, {...exist, isFavorite: true}]);
    }
    // setToggleFavorite(true);
  };

  const removeFromFavorites = (id: string) => {
    console.log(id);
    const isRemove = favoritesDogs.filter((el) => el.id !== id);
    setFavoritesDogs(isRemove);
  };

  return (
    <div className="w-full h-screen p-14">
      <header className="mb-10">
        <h1 className="font-nunito-sans font-bold text-2xl">Dog Breeds</h1>
      </header>
      <SearchBar />
      <div className="grid grid-cols-3 mb-10 gap-1">
        {ramdonDogs.map((el) =>
          el.isFavorite === false ? (
            <Card
              key={el.id}
              el={el}
              addToFavorites={addToFavorites}
              isOnFav={el.isFavorite}
              removeFromFavorites={removeFromFavorites}
            />
          ) : (
            ''
          )
        )}
      </div>
      <hr className="mb-10" />
      <Favorites
        favoritesDogs={favoritesDogs}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default App;
