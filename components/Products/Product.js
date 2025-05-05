import React from "react";
import Card from "./Card";
import Card_New from "./Card_New";

const Product = () => {
  return (
    <div className="h-auto bg-white px-6 py-8 shadow ">
    <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-start uppercase tracking-wide">
       Foot Wear
    </h1>
    
    <div className="flex flex-wrap justify-start gap-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <div className="flex flex-wrap justify-start gap-10 mt-6">
    <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
  

  );
};

export default Product;
