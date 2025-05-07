import React, { useRef } from "react";
import cat1 from "../../pubilc/images/cat1.jpg";
import cat2 from "../../public/images/cat2.jpg";
import dog1 from "../../public/images/dog1.jpg";
import dog2 from "../../public/images/dog2.jpg";
import dog3 from "../../public/images/dog3.jpg";
import dog4 from "../../public/images/dog4.jpg";

function ImageSlider() {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse events
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
    const walk = (x - startX.current) * 3;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch events
  const handleTouchStart = (e) => {
    isDown.current = true;
    startX.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDown.current = false;
  };

  const handleTouchMove = (e) => {
    if (!isDown.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 3;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const images = [cat1, dog1, cat2, dog2, dog3, dog4];

  return (
    <div
      ref={sliderRef}
      className="slider flex flex-nowrap overflow-x-auto m-4 md:m-6 custom-scrollbar"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      style={{ cursor: isDown.current ? "grabbing" : "grab" }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Image ${index + 1}`}
          className="m-2 rounded-[8px] max-h-[150px] md:max-h-[300px] object-cover"
        />
      ))}
    </div>
  );
}

export default ImageSlider;
