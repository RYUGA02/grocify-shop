import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredItems =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === activeTab);

  const renderCards = filteredItems.slice(0, 8).map((product) => {
    return (
      <Cards
        image={product.image}
        name={product.name}
        price={product.price}
        category={product.category}
      />
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === category ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white" : "bg-zinc-100"}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Listing */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
          {renderCards}
        </div>

        {/* View All Button */}
        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/allproducts"
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
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
