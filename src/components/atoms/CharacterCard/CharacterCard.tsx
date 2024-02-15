'use client'
import React from 'react'
import '../cards/Card.css'
import { useRouter } from "next/navigation";


interface ICharacterCard {

    id: number;
    name: string;
    status: string;
    url: string;
    species: string
    image: string
    characterId: number | undefined | string;
}




const CharacterCard = (props: ICharacterCard) => {

    const router = useRouter()
    const {id, species, name, image, characterId, url} = props


  return (
    <div className="card-container">
    <div className="card-image-container">
      <img
        onClick={() =>
          router.push(
            `/residents/${characterId}?url=${encodeURIComponent(
              url
            )}`
          )}
        key={id}
        alt="Picture"
        width={600}
        height={600}
        src={image}
      />
    </div>
    <div className="flex flex-col px-3 py-4">
<span className="font-bold">
Name:

<span className="card-details-container text-xs md:text-sm">
  {"  "}
  {name}
</span>
</span>

<span className="font-bold">
  Species:
<span className="card-details-container">
  {"  "}
  {species}
</span>
</span>
</div>
  </div>
  )
}

export default CharacterCard