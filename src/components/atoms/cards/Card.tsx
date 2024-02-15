"use client";
import React, { useEffect, useState } from "react";
import "./Card.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner/Spinner";

interface ICard {
  loading: boolean;
  name: string;
  type: string;
  residents: string[];
}

const Card = (props: ICard) => {
  const [resi, setRes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { name, type, residents } = props;

  const router = useRouter();

  useEffect(() => {
    const getResident = async (residents) => {
      setLoading(true);
      const residentData = [];
      for (let i = 0; i < residents?.length; i++) {
        const res = await fetch(residents[i]);
        const data = await res.json();
        residentData.push(data);
      }
      setRes(residentData);
      setLoading(false);
    };

    getResident(residents);
  }, [residents]);

  return (
    <div className="card-container">
      <div className="card-image-container">
        <div className=" flex grid justify-center items-center grid-cols-2 gap-3 px-4 py-3">
          {resi.slice(0, 4).map((resident, index) => {
            const characterId = resident.url.split("/").pop();

            return (
              <>
                {loading ? (
                  <div className="flex justify-center items-center">
                    <Spinner />
                  </div>
                ) : (
                  <div
                    className="flex flex-col"
                    onClick={() =>
                      router.push(
                        `/residents/${characterId}?url=${encodeURIComponent(
                          resident.url
                        )}`
                      )
                    }
                  >
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
                )}
              </>
            );
          })}
          
        </div>
        {resi.length === 0 && (
            <div className="flex flex-col justify-center items-center">
              {" "}
              <Image
                alt="Picture of the author"
                width={600}
                height={600}
                src={"/Anim.gif"}
              />{" "}
              <span className="text-sm">No residents found in this location</span>

            </div>
          )}
      </div>
      <div className="flex flex-col px-3 py-4">
        <span className="font-bold">
          Location:
          <span className="card-details-container text-xs md:text-sm">
            {name}
          </span>
        </span>

        <span className="font-bold">
          Type:
          <span className="card-details-container">{type}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
