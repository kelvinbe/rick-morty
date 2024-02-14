'use client'
import React, { useState } from 'react'
import './Card.css'


interface ICard {
    image: string;
    name: string;
    type: string;
    residents: string[];
    

  }

const Card = (props: ICard) => {
    const [resi, setRes] = useState(null)

    const {image, name, type, residents} = props

    const getResident = async (resident) => {
    const res = await fetch(resident)
    return res.json()
    }

  return (
<div
  className="card-container">
  <div className="card-image-container">
   {residents.slice(1, 2).map((resident) => {
        
            return <img
            className="rounded-t-lg"
            src={resi?.image}
            alt="" />

   })} 
  </div>
  <div className="flex flex-col px-3">
    <span>location:
    <span className="card-details-container text-xs md:text-sm">
      {name}
    </span>
    </span>

    <span>type:
    <span className="card-details-container">
      {type}
    </span>
    </span>
  </div>
</div>
  )
}

export default Card