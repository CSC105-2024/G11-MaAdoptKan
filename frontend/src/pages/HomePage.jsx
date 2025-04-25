import React, { useState } from "react";
import Navbar from "./../assets/Navbar";
import { Search, PawPrint } from "lucide-react"; // for icons (optional)
import { Link } from "react-router-dom";
import PetInformation from "../popup/PetInformation";

export default function HomePage() {
  const pets = [
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
    },
    {
      name: "Jaki",
      age: "2 Yearsold",
      breed: "Jack Russell",
      image: "./images/Jaki.png",
      icon: "./images/dogorangeicon.png",
    },
    {
      name: "Tojin",
      age: "2 Yearsold",
      breed: "Scottish Fold",
      image: "./images/Tojin.png",
      icon: "./images/catorangeicon.png",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
    },
    {
      name: "Jaki",
      age: "2 Yearsold",
      breed: "Jack Russell",
      image: "./images/Jaki.png",
      icon: "./images/dogorangeicon.png",
    },
    {
      name: "Tojin",
      age: "2 Yearsold",
      breed: "Scottish Fold",
      image: "./images/Tojin.png",
      icon: "./images/catorangeicon.png",
    },
  ];

  const [selectedPet, setSelectedPet] = useState(null);
  const [infoPopup, setInfoPopup] = useState(false);

  const mockPetData = {
    name: "Milo",
    phone: "0812345678",
    address: "Bangkok",
    type: "dog",
    gender: "male",
    color: "brown",
    date: new Date("2022-01-01"),
    ageYear: "2",
    ageMonth: "3",
    breed: "Shiba",
    vaccine: ["Rabies", "Parvo", "", ""],
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen w-screen relative">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] overflow-hidden text-center">
          <div className="absolute inset-0 z-0 bg-[rgba(0,0,0,20)]">
            <div className="w-full h-full bg-[url('./images/Heropetpicture.png')] bg-cover bg-center opacity-70" />
          </div>

          <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
            <h1 className="text-5xl font-bold">
              We provide{" "}
              <span className="text-[#E97A28] font-sue">500,000,000</span>{" "}
              shelters to abandoned animals
            </h1>
          </div>
        </div>

        {/* Recommended Pets Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-10 z-10">
          
          <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-4 mb-6">
            <h2 className="text-lg sm:text-2xl font-bold whitespace-nowrap">
              Recommended Pets For You
            </h2>
            <Link
              to="/pets"
              className="px-4 py-2 text-sm sm:text-base text-[#E97A28] font-medium border-1 border-[#E97A28] bg-orange-50 rounded-lg transition hover:bg-orange-100 whitespace-nowrap"
            >
              See more
            </Link>
          </div>

          <div
            className="flex gap-4 overflow-x-auto cursor-grab scrollbar-hide"
            onMouseDown={(e) => {
              const container = e.currentTarget;
              let isDown = true;
              const startX = e.pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;

              const mouseMoveHandler = (moveEvent) => {
                if (!isDown) return;
                const x = moveEvent.pageX - container.offsetLeft;
                const walk = (x - startX) * 1.5;
                container.scrollLeft = scrollLeft - walk;
              };

              const stopDragging = () => {
                isDown = false;
                window.removeEventListener("mousemove", mouseMoveHandler);
                window.removeEventListener("mouseup", stopDragging);
              };

              window.addEventListener("mousemove", mouseMoveHandler);
              window.addEventListener("mouseup", stopDragging);
            }}
          >
            {pets.map((pet, idx) => (
              <div
                key={idx}
                className="min-w-[250px] flex-shrink-0 bg-white rounded-xl shadow p-4 text-left"
                onClick={() => {
                  console.log("card clicked");
                  setSelectedPet(mockPetData);
                  setInfoPopup(true);
                }}
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{pet.name}</h3>
                <p className="text-sm text-gray-500">{pet.age}</p>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-700">
                  <img
                    src={pet.icon}
                    className="w-[25px] h-[25px] object-cover rounded-lg flex items-center"
                  />
                  <span className="flex items-center">{pet.breed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PetInformation
          trigger={infoPopup}
          setTrigger={setInfoPopup}
          pet={selectedPet}
        />
    </>
  );
}
