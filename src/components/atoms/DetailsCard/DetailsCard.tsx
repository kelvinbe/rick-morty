import React from "react";

interface IDetailsCard {
  name: string  | undefined;
  species: string  | undefined;
  gender: string | undefined;
  origin: string | undefined
  image: string  | undefined;
  status: string  | undefined;
}

const DetailsCard = (props: IDetailsCard) => {
  const { name, species, gender, origin, image, status } = props;
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex justify-center items-center bg-gray-200 h-52">
        <img
          className="h-32 w-32 rounded-full object-cover"
          src={image}
          alt="Profile"
        />
      </div>
      <div className="px-6 py-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Name: {name}</div>
          <div className="mb-2">
            <span className="text-gray-700">Status: {status}</span>
          </div>
          <div className="mb-2">
            <span className="text-gray-700">Species: {species}</span>
          </div>
          <div className="mb-2">
            <span className="text-gray-700">Gender:{gender} </span>
          </div>
          <div className="mb-2">
            <span className="text-gray-700">
              Origin: {origin || "Unknown"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
