import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import {IconSearch} from './IconSearch';
import {
  ChangeEvent,
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import {Dog} from '../interfaces/dog.interface';

interface SearchProps {
  setRamdonDogs: Dispatch<SetStateAction<Dog[]>>;
}

export const SearchBar = ({setRamdonDogs}: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setInputValue(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://dog.ceo/api/breed/${inputValue}/images/random/10`
      );
      setRamdonDogs(
        res.data.message.map((el: string) => {
          return {
            image: el,
            id: uuidv4(),
            isFavorite: false,
          };
        })
      );
      setError('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <form
        className="w-full h-9 flex items-center justify-between flex-1 gap-2 mb-10"
        onSubmit={handleSubmit}
      >
        <input
          className="flex-grow px-4 h-full font-nunito-sans text-[#44484C]"
          type="text"
          autoFocus={true}
          onChange={handleChange}
        />
        <div className="bg-[#0794E3] font-nunito-sans font-normal text-white w-28 h-full px-4 flex justify-between items-center gap-2 rounded-sm cursor-pointer">
          <IconSearch />
          <button className="text-sm font-bold" type="submit">
            Search
          </button>
        </div>
      </form>
      {error ? (
        <div className="w-full text-center font-nunito-sans mb-4 text-red-500">
          {error} 😪
        </div>
      ) : (
        ''
      )}
    </>
  );
};
