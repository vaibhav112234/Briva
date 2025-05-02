import React from "react";
import Carousel from "./Carousel";

function Hero() {
  const slides = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
  return (
    <main className="w-full">
      <div>
        <Carousel slides={slides} />
      </div>
    </main>
  );
}

export default Hero;
