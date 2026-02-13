import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = ({ image, name, price, category }) => {
  return (
    <div className="bg-zinc-100 p-5 rounded-xl">
      {/* Card Icons */}
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300">
          <FaHeart />
        </span>
        <button
          className=" inline-flex items-center justify-center
        bg-orange-500
        text-white
        px-5 py-3
        rounded-lg
        text-md md:text-lg
        font-medium
        cursor-pointer
        transition
        duration-300
        hover:bg-orange-600
        hover:scale-105
        focus:outline-none
        active:scale-95
        select-none"
        >
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className="w-full h-50 ">
        <img src={image} className="w-full h-full object-contain mx-auto" />
      </div>

      {/* Card Content */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-2xl font-bold mt-4 mb-3">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
