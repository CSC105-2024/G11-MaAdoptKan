import React, { useEffect, useRef } from "react";
import catdark from "C:/Users/nateb/MaAdoptKan/src/assets/catdark.png";

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

  return (
    <div
      ref={sliderRef}
      className="slider flex flex-nowrap overflow-hidden m-6 "
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ cursor: isDown.current ? "grabbing" : "grab" }}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={catdark}
          alt={`Image ${index + 1}`}
          className="m-2 rounded-[10px]"
        />
      ))}
    </div>
  );
}

export default ImageSlider;
