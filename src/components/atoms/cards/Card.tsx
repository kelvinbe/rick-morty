import React from 'react'
import './Card.css'


interface ICard {
    image: string;
    details: string;

  }

const Card = (props: ICard) => {

    const {image, details} = props

  return (
<div
  className="card-container">
  <div className="card-image-container">
    <img
      className="rounded-t-lg"
      src={image}
      alt="" />
  </div>
  <div className="p-6">
    <p className="card-details-container">
      {details}
    </p>
  </div>
</div>
  )
}

export default Card