import {IconSearch} from './IconSearch';

export const SearchBar = () => {
  return (
    <form className="w-full h-9 flex items-center justify-between flex-1 gap-2 mb-10">
      <input
        type="text"
        autoFocus={true}
        className="flex-grow px-4 h-full font-nunito-sans text-[#44484C]"
      />
      <div className="bg-[#0794E3] font-nunito-sans font-normal text-white w-28 h-full px-4 flex justify-between items-center gap-2 rounded-sm">
        <IconSearch />
        <button className="text-sm font-bold">Search</button>
      </div>
    </form>
  );
};
