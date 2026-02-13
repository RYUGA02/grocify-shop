import React from "react";
import Heading from "../Heading/Heading";
import FruitCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import MeatCat from "../../assets/meat-and-seafood.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitCat,
    path: "/fruits",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    path: "/dairy",
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: MeatCat,
    path: "/seafood",
  },
];

const Category = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by Category" />

        {/* Category Cards */}
        <div className="flex flex-wrap gap-10 items-stretch mt-15">
          {category.map((card) => (
            <div key={card.id} className="flex-1 basis-[300px] flex flex-col">
              {/* Image */}
              <div className="h-[220px] flex items-end justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="bg-zinc-100 p-8 rounded-xl flex flex-col flex-1 mt-4">
                <h3 className="text-zinc-800 text-3xl font-bold">
                  {card.title}
                </h3>

                <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>

                {/* Button always at bottom */}
                <div className="mt-auto">
                  <Link
                    to={card.path}
                    className="  inline-flex items-center justify-center
                                 bg-orange-500
                                 text-white
                                  px-8 py-3
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
                    See All
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
