import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const value = [
  {
    id: 1,
    title: "Trust",
    para: "Built on transparency, honesty, and consistency—so you can shop with complete confidence.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "Carefully sourced and delivered at peak freshness to keep every bite flavorful and nutritious.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "We follow rigorous food safety protocols to guarantee freshness, quality, and complete peace of mind with every purchase.",
    icon: <FaShieldAlt />,
  },

  {
    id: 4,
    title: "100% Organic",
    para: "Grown naturally without harmful chemicals, ensuring pure, healthy, and sustainable food choices.",
    icon: <FaSeedling />,
  },
];

const leftValues = value.slice(0, 2).map((item) => {
  return (
    <div className="flex md:flex-row-reverse items-center gap-7" key={item.id}>
      <div>
        <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
          {item.icon}
        </span>
      </div>

      <div className="md:text-right">
        <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
        <p className="text-zinc-600 mt-2">{item.para}</p>
      </div>
    </div>
  );
});

const rightValues = value.slice(2).map((item) => {
  return (
    <div className="flex items-center gap-7" key={item.id}>
      <div>
        <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
          {item.icon}
        </span>
      </div>

      <div>
        <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
        <p className="text-zinc-600 mt-2">{item.para}</p>
      </div>
    </div>
  );
});

const Values = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />

        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
          {/* Left Value */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>

          {/* Value Image */}
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} alt="Basket Image" />
          </div>

          {/* Right Value */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
