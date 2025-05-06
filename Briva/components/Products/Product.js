import React from "react";
import Card from "./Card";
import Card_New from "./Card_New";
import Nike from "../../public/nike.ico";
import Image from "next/image";

const Product = () => {
  return (
    <div className="h-auto bg-white px-6 py-8 shadow">
      {/* Title */}
      <h1 className="flex items-center text-3xl font-extrabold text-gray-800 mb-6 uppercase tracking-wide">
        NIKE Foot Wear
        <Image
          src={Nike}
          alt="Nike logo"
          width={32}
          height={32}
          className="ml-2"
        />
      </h1>

      {/* Static Cards */}
      <div className="flex flex-wrap justify-start gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Limited Edition
        </h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory px-4 py-4 gap-4 sm:justify-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scroll-smooth">
          <Card_New />
          <Card_New />
          <Card_New />
          <Card_New />
          <Card_New />
        </div>
      </div>
    </div>
  );
};

export default Product;
