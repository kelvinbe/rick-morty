"use client";
import React, { useEffect, useState } from "react";
import "./Card.css";
import { copyFileSync } from "fs";
import Image from "next/image";

interface ICard {
  image: string;
  name: string;
  type: string;
  residents: string[];
}

const Card = (props: ICard) => {
  const [resi, setRes] = useState([]);

  const { image, name, type, residents } = props;

  useEffect(() => {
    const getResident = async (residents) => {
      const residentData = [];
      for (let i = 0; i < residents?.length; i++) {
        const res = await fetch(residents[i]);
        const data = await res.json();
        residentData.push(data);
      }
      setRes(residentData);
    };

    getResident(residents);
  }, [residents]);

  console.log(resi.slice(0, 8));

  return (
    <div className="card-container">
      <div className="card-image-container">
        <div className=" flex grid justify-center items-center grid-cols-2 gap-3 px-4 py-3">
          {resi.slice(0, 4).map((resident, index) => {
            return (
              <div className="flex flex-col">
                <img
                  key={resident}
                  className="rounded-t-lg"
                  src={resident.image}
                  width={90}
                  height={30}
                  key={index}
                  alt=""
                />
                <div className="flex flex-col text-xs">
                  <span>name: {resident.name}</span>
                  <span>status: {resident.status}</span>
                </div>
              </div>
            );
          })}
          {resi.length === 0 && <div className="flex justify-center items-center"> <Image  alt="Picture of the author"
      width={600}
      height={600} src={"/Anim.gif"} /> </div>}
        </div>
      </div>
      <div className="flex flex-col px-3 py-4">
        <span>
          location:
          <span className="card-details-container text-xs md:text-sm">
            {name}
          </span>
        </span>

        <span>
          type:
          <span className="card-details-container">{type}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
