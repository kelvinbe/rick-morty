"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/atoms/cards/Card";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import Image from "next/image";
import Spinner from "@/components/atoms/Spinner/Spinner";
import "../components/atoms/cards/Card.css";
import CharacterCard from "@/components/atoms/CharacterCard/CharacterCard";




export interface ICharacter {
    image: string;
    episode: string[];
    gender: string;
    id: number;
    name: string;
    status: string;
    url: string;
    species: string
    characterId: string | undefined

}


interface ILocation {

  id:	number,	
  name:	string
  type:	string	
  dimension:	string
  residents:	string[] 
  url:	string 
  created:	string	
  }



  type FilteredData = ILocation & ICharacter;




export default function Home() {
  const [data, setData] = useState<ICharacter[]>([]);
  const [filteredData, setFilteredData] = useState<FilteredData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [resource, setResource] = useState("location");
  const [loading, setLoading] = useState(false);

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
      try {
        setLoading(true);
        if (data.length === 0) {
        const result = await getData();
        setData(result.results);
        setFilteredData(result.results);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [,resource]);

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    const query = `name=${term}`;
    const data = await getData(query);
    setFilteredData(data.results);
  };


  return (
    <main className="flex flex-col py-5 px-6">
      <div className="flex justify-center pb-1">
        <div className="flex flex-col justify-center align-center">
          <div className="flex justify-center">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </div>
          <span className="flex justify-center items-center text-xl font-bold">
            Rick And Morty Peeps
          </span>
        </div>
      </div>
      <div className="pb-10">
        <SearchBar
          chipResource={(value: string) => setResource(value)}
          searchTearm={searchTerm}
          handleSearch={handleSearch}
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4  gap-4 px-10">
          {(resource === "location" || resource === "episode") &&
            filteredData.map((location, i) => {
              return (
                <Card
                  key={i}
                  data={filteredData}
                  resource={resource}
                  loading={loading}
                  name={location.name}
                  type={location.type}
                  residents={location?.residents}
                />
              );
            })}
          {resource === "character" && <div></div>}
        </div>
      )}
      {resource === "character" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4  gap-4 px-10">
            {data.length > 0 &&
              filteredData.map((character, i) => {
                const characterId: number | undefined | string = character.url.split("/").pop();
                return (
                  <CharacterCard
                    key={i}
                    characterId={characterId}
                    name={character?.name}
                    id={character?.id}
                    image={character?.image}
                    species={character?.species}
                    status={character?.status}
                    url={character?.url}
                  />
                );
              })}
          </div>
        </div>
      )}
    </main>
  );
}
