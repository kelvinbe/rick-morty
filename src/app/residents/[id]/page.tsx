"use client";
import DetailsCard from "@/components/atoms/DetailsCard/DetailsCard";
import React, { useState, useEffect } from "react";
import NotesForm from "@/components/Organisms/Form/Form";


interface IResident {
    id?: number
    name?: string;
    species?: string;
    gender?: string;
    origin?: { name: string } | undefined
    image?: string;
    status?: string;
  
}

const Page = () => {
  const [data, setData] = useState<IResident | null>(null);

  const getData = async () => {
    const params = new URLSearchParams(window.location.search);
    const residentUrl = params.get("url");
    const decodedUrl = decodeURIComponent(residentUrl || "");

    const res = await fetch(decodedUrl);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  useEffect(() => {
      const fetchData = async () => {
        const data = await getData();
        setData(data);

      };
      fetchData();

   
  }, []);

  const residentData = data ?? {};



  return (
    <main className="flex flex-col py-20 px-20">
      <div className="flex justify-center pb-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 py-8">Spill The Beans</h1>
      </div>
      <div className="flex flex-col">

      <div className="pb-10">
        <DetailsCard
          gender={residentData.gender}
          image={residentData.image}
          name={residentData.name}
          origin={residentData.origin?.name}
          species={residentData.species}
          status={residentData.status}
        />
      </div>
      <div>
        <NotesForm residentID={residentData.id} />
      </div>
      </div>

    </main>
  );
};

export default Page;
