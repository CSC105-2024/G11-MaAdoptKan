import React, { useState, useEffect } from "react";
import Navbar from "../assets/Navbar";
import CreatePetForm from "../popup/CreatePetForm";
import EditPetForm from "../popup/EditPetForm";
import PetInformation from "../popup/PetInformation";
import RequestForm from "../popup/RequestForm";
import { getPetData } from "../api/getPetData";

export default function PetPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getPetData(10000);
      setPets(() => data.data);
    }

    getData();
    document.title = "Pet";
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const [buttonPopup, setButtonPopup] = useState(false);
  // const [editPopup, setEditPopup] = useState(false);
  const [infoPopup, setInfoPopup] = useState(false);
  // const [requestPopup, setRequestPopup] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 20;
  const [pets, setPets] = useState([]);

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

  // if (pets.length === 0) return null;

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
                    ? "text-primaryO text-2xl"
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
          {isLoggedIn && (
            <button
              className="bg-[#E97A28] text-white px-4 py-2 rounded-md shadow hover:bg-primaryO"
              onClick={() => setButtonPopup(true)}
            >
              + Create
            </button>
          )}
        </div>
        <CreatePetForm trigger={buttonPopup} setTrigger={setButtonPopup} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 p-6 w-full">
          {currentPets.map((pet, index) => (
            <div
              key={index}
              className="group text-left bg-white rounded-xl shadow p-4 cursor-pointer hover:bg-[#E97A28] hover:text-white transition w-full"
              onClick={() => {
                console.log("card clicked");
                setSelectedPet(pet);
                setInfoPopup(true);
              }}
            >
              <img
                src={`http://localhost:3000/${pet.pictureUrl}`}
                alt={pet.name}
                className="rounded-md w-full h-32 object-cover"
              />
              <div className="mt-2">
                <div className="font-semibold text-lg group-hover:text-white">
                  {pet.name}
                </div>
                <div className="text-sm text-gray-500 group-hover:text-white">
                  {pet.age}
                </div>
                <div className="flex text-sm pt-1 mt-1 gap-2 items-center group-hover:text-white">
                  {/* icon swap on hover */}
                  <div className="relative w-[25px] h-[25px]">
                    {/* default icon */}
                    <img
                      src={
                        pet.type === "cat"
                          ? "./images/catorangeicon.png"
                          : "./images/dogorangeicon.png"
                      }
                      className="w-full h-full object-cover rounded-lg group-hover:hidden"
                      alt="icon"
                    />
                    {/* white icon */}
                    <img
                      src={
                        pet.type === "cat"
                          ? "./images/catwhiteicon.png"
                          : "./images/dogwhiteicon.png"
                      }
                      className="w-full h-full object-cover rounded-lg hidden group-hover:block absolute top-0 left-0"
                      alt="white icon"
                    />
                  </div>
                  <div>{pet.breed}</div>
                </div>
              </div>
            </div>
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
