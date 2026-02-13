import React from "react";
import Button from "../Button/Button";
import FruitSet from "../../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-no-repeat bg-right bg-contain"
      style={{ backgroundImage: `url(${FruitSet})` }}
    >
      <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10">
        <span className="md:text-8xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">
          20%
        </span>
        <div className="max-w-[1400px]">
          <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold">
            First Order Discount!
          </h3>
          <p className="text-zinc-600 my-6">
            Enjoy an exclusive first order discount on our grocery website! Shop
            free
          </p>
        </div>
        <button
          className="inline-flex items-center justify-center 
        bg-orange-600
        text-white
        m-10
        px-3 py-5 
        rounded-lg
        md:text-md
        font-medium
        cursor-pointer
        transition
        duration-300
        hover:scale-105
        focus:outline-none
        active:scale-95
        select-none"
        >
          Get a Discount
        </button>
      </div>
    </section>
  );
};

export default Discount;
