import React, { useEffect, useRef } from "react";
import catdark from "../assets/images/catdark.png";
import cat1 from "../assets/images/cat1.jpg";
import cat2 from "../assets/images/cat2.jpg";
import dog1 from "../assets/images/dog1.jpg";
import dog2 from "../assets/images/dog2.jpg";
import dog3 from "../assets/images/dog3.jpg";
import dog4 from "../assets/images/dog4.jpg";

function ImageSlider() {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add("active");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 3; // Multiply to adjust scrolling speed
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const images = [cat1, dog1, cat2, dog2, dog3, dog4];

  return (
    <div
      ref={sliderRef}
      className="slider flex flex-nowrap overflow-hidden m-6"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ cursor: isDown.current ? "grabbing" : "grab" }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Image ${index + 1}`}
          className="m-2 rounded-[8px] max-h-[300px]"
        />
      ))}
    </div>
  );
}

export default ImageSlider;
