import React, { useState, useEffect } from "react";
import Navbar from "./../assets/Navbar";
import { Search, PawPrint } from "lucide-react"; // for icons (optional)
import { Link } from "react-router-dom";
import PetInformation from "../popup/PetInformation";
import { getPetData } from "../api/getPetData";

export default function HomePage() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    document.title = "MaAdoptKan";
    const getData = async () => {
      const data = await getPetData(8);
      setPets(() => data.data);
    };
    getData();
  }, []);

  console.log(pets);

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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw",
    imageVaccine:
      "https://i.etsystatic.com/29156076/r/il/e1a1fe/5483373649/il_fullxfull.5483373649_rn1v.jpg",
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
                className="group min-w-[250px] flex-shrink-0 bg-white rounded-xl p-4 text-left transition duration-300 ease-in-out hover:bg-[#E97A28] hover:text-white hover:shadow-xl cursor-pointer"
                onClick={() => {
                  console.log("card clicked");
                  setSelectedPet(pet);
                  setInfoPopup(true);
                }}
              >
                <img
                  src={`http://localhost:3000/${pet.pictureUrl}`}
                  alt={pet.name}
                  className="rounded-md w-[250px] h-[200px] object-cover flex justify-center"
                />
                <h3 className="text-lg font-semibold group-hover:text-white">
                  {pet.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  {pet.age}
                </p>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-700 group-hover:text-white">
                  <div className="relative w-[25px] h-[25px]">
                    {/* Default icon */}
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
                  <span>{pet.breed}</span>
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
