import React from "react";
import { FaStar } from 'react-icons/fa';
const Card = () => {
  return (
    <div className="relative mt-10 mb-10 flex flex-col w-full max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-full transform transition duration-500 hover:shadow-xl hover:scale-105">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            Nike Air MX Super 2500 - Red
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">₹449</span>
            <span className="text-sm text-slate-900 line-through">₹699</span>
          </p>
          <div className="flex items-center">
            <FaStar color="gold"/>
            <FaStar color="gold"/>
            <FaStar color="gold"/>
            <FaStar color="gold"/>
            <FaStar color="gold"/>
            <span className="mr-2 ml-3 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
             5.0
            </span>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Card;
