import React, { useState } from "react";
import Navbar from "../assets/Navbar";
import CreatePetForm from "../popup/CreatePetForm";
import EditPetForm from "../popup/EditPetForm";
import PetInformation from "../popup/PetInformation";
import RequestForm from "../popup/RequestForm";

export default function PetPage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [infoPopup, setInfoPopup] = useState(false);
  const [requestPopup, setRequestPopup] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 20;

  const pets = [
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    {
      name: "Maki",
      age: "2 Yearsold",
      breed: "Himalayan",
      image: "./images/Maki.png",
      icon: "./images/catorangeicon.png",
      type: "cat",
    },
    {
      name: "Yuma",
      age: "2 Yearsold",
      breed: "Labrador Retriever",
      image: "./images/Yuma.png",
      icon: "./images/dogorangeicon.png",
      type: "dog",
    },
    // (more pet entries... repeated or new)
  ];

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

  const filteredPets =
    filter === "All" ? pets : pets.filter((pet) => pet.type === filter);
  const totalPages = Math.ceil(filteredPets.length / petsPerPage);
  const startIndex = (currentPage - 1) * petsPerPage;
  const currentPets = filteredPets.slice(startIndex, startIndex + petsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto min-h-screen">
        <div className="flex justify-between w-full px-6 mt-8 items-center">
          <div className="flex space-x-6 text-xl font-semibold">
            {["All", "cat", "dog"].map((type) => (
              <button
                key={type}
                className={`transition-all duration-500 capitalize ${
                  filter === type
                    ? "text-[#E97A28] text-2xl"
                    : "text-gray-400 text-xl"
                }`}
                onClick={() => {
                  setFilter(type);
                  setCurrentPage(1);
                }}
              >
                {type === "All"
                  ? "All"
                  : type.charAt(0).toUpperCase() + type.slice(1) + "s"}
              </button>
            ))}
          </div>

          <button
            className="bg-[#E97A28] text-white px-4 py-2 rounded-md shadow hover:bg-orange-500"
            onClick={() => setButtonPopup(true)}
          >
            + Create
          </button>
        </div>
        <CreatePetForm trigger={buttonPopup} setTrigger={setButtonPopup} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 p-6 w-full">
          {currentPets.map((pet, index) => (
            <>
              <div
                key={index}
                className="text-left bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg transition w-full"
                onClick={() => {
                  console.log("card clicked");
                  setSelectedPet(mockPetData);
                  setInfoPopup(true);
                }}
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="rounded-md w-full h-32 object-cover"
                />
                <div className="mt-2">
                  <div className="font-semibold text-lg">{pet.name}</div>
                  <div className="text-sm text-gray-500">{pet.age}</div>
                  <div className="flex text-sm pt-1 text-[#000000] mt-1 gap-2">
                    <img
                      src={pet.icon}
                      className="w-[25px] h-[25px] object-cover rounded-lg"
                    />
                    <div className="flex items-center">{pet.breed}</div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <PetInformation
          trigger={infoPopup}
          setTrigger={setInfoPopup}
          pet={selectedPet}
        />

        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded border ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-[#E97A28] border-[#E97A28]"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1
                  ? "bg-[#E97A28] text-white"
                  : "bg-white text-[#E97A28] border-[#E97A28]"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded border ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-[#E97A28] border-[#E97A28]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
