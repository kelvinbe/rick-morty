"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/atoms/cards/Card";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import Image from "next/image";



export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [resource, setResource] = useState('location')


  async function getData(queryString?: string) {
    let url = `https://rickandmortyapi.com/api/${resource}`;
    if (queryString) {
      url += `?${queryString}`;
    }
  
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result.results);
      setFilteredData(result.results);
    }
    fetchData();
  }, []);

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    const query = `name=${term}`;
    const data = await getData(query);
    setFilteredData(data.results);
  };


  return (
    <main className="flex flex-col py-5 px-20">
      <div className="flex justify-center pb-1">
        <div className='flex flex-col justify-center align-center'>
          <div className="flex justify-center">
        <Image src='/logo.png' width={100} height={100} alt='logo'/>
        </div>
      <span className="flex justify-center items-center text-xl font-bold">
      Rick And Morty Peeps
      </span>
      </div>

      </div>
      <div className="pb-10">
        <SearchBar chipResource={(value: string) => setResource(value)} searchTearm={searchTerm} handleSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4  gap-4 px-10">
        {filteredData.map((location) => {
          return (
            <Card
              image="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
              name={location.name}
              type={location.type}
              residents={location.residents}
            />
          );
        })}
      </div>
    </main>
  );
}
