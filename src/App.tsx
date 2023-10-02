import axios from 'axios';
import {SearchBar} from './components/SearchBar';
import {useState, useEffect} from 'react';
import {Dog} from './interfaces/dog.interface';
import {Card} from './components/Card';
import {Favorites} from './components/Favorites';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [ramdonDogs, setRamdonDogs] = useState<Dog[]>([]);
  //TODO: ver linea 21 y capaz que si puedo usar un unico array de ramdonDogs al manipularlo
  //const [favorites, setFavorites] = useState<Dog[]>([]);
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
      setRamdonDogs([...ramdonDogs, {...exist, isFavorite: true}]);
    }
  };

  const removeFromFavorites = (id: string, favorite: boolean) => {
    console.log(id, favorite);

    if (favorite === true) {
      // Cambia la propiedad isFavorite a false para el elemento con el ID dado
      const updatedDogs = ramdonDogs.map((el) => {
        if (el.id === id) {
          return {...el, isFavorite: false};
        }
        return el;
      });

      // Actualiza el estado con los perros actualizados
      setRamdonDogs(updatedDogs);
    }
  };

  // const removeFromFavorites = (id: string, favorite: boolean) => {
  //   console.log(id, favorite);

  //   if (favorite === false) {
  //     const isRemove = ramdonDogs.filter((el) => el.id !== id);
  //     setRamdonDogs(isRemove);
  //   }
  // };

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
              isFavorite={el.isFavorite}
              removeFromFavorites={removeFromFavorites}
            />
          ) : (
            ''
          )
        )}
      </div>
      <hr className="mb-10" />
      <Favorites
        ramdonDogs={ramdonDogs}
        setRamdonDogs={setRamdonDogs}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default App;
