import React, { useState } from "react";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";
import Chips from "@/components/atoms/Chips/Chips";

interface ISearch {
  searchTearm: string;
  handleSearch: (tearm: string) => void;
  chipResource: (value: string) => void;
}

const SearchBar = (props: ISearch) => {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const { searchTearm, handleSearch, chipResource } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  const handleChipResource = (resource: string) => {
    chipResource(resource);
    setActiveChip(resource);

  };
  return (
    <div className="mb-3">
      <div className="search-container">
        <input
          type="search"
          className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
          placeholder="Search"
          value={searchTearm}
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={handleChange}
        />

        <span className="magnify-container">
          <CiSearch size={30} />
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-center">
        <span className="mb-2 md:mb-0">Search by:</span>
        <div className="flex flex-wrap gap-2 md:gap-0 md:ml-2">
          <div className="pl-5">
            <Chips
              active={activeChip === 'location'}
              label="Location"
              onClick={() => handleChipResource('location')}
            />
          </div>
          <div className="pl-5">
            <Chips
              
              active={activeChip === 'character'}
              label="Character"
              onClick={() => handleChipResource('character')}
            />
          </div>
          <div className="pl-5">
            <Chips
              active={activeChip === 'episode'}
              label="Episode"
              onClick={() => handleChipResource('episode')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
