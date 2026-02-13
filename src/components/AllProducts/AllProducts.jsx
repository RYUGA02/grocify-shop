import React from "react";
import BgAll from "../../assets/all-banner.jpg";
import CategoryPage from "../CategoryPage/CategoryPage";

const AllProducts = () => {
  return (
    <CategoryPage title="All Products" bgImage={BgAll} categories={["All"]} />
  );
};

export default AllProducts;
