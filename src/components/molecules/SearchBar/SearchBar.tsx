import React from 'react'
import './SearchBar.css'
import { CiSearch } from "react-icons/ci";



interface ISearch {
    searchTearm: string
}

const SearchBar = (props: ISearch) => {

    const {searchTearm} = props


  return (
<div className="mb-3">
  <div className="search-container">
    <input
      type="search"
      className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
      placeholder="Search"
      value={searchTearm}
      aria-label="Search"
      aria-describedby="button-addon2" />

    <span
      className="magnify-container"
      >
      <CiSearch size={30} />
    </span>
  </div>
</div>
  )
}

export default SearchBar