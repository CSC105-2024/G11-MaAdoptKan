import React, { useState, useEffect } from "react";
import Navbar from "../assets/Navbar.jsx";
import PencilIcon from "../../public/images/Pencil.png";
import TrashIcon from "../../public/images/Delete.png";
import RequestDetailPopup from "../popup/RequestDetail.jsx";
import EditPetForm from "../popup/EditPetForm.jsx";

export default function ProfilePage() {
  useEffect(() => {
    document.title = "Your Profile";
  }, []);

  const [requestPopup, setRequestPopup] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [editPopup, setEditPopup] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [petToDeleteIndex, setPetToDeleteIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 10; // ✅ จำนวนการ์ดต่อหน้า

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

  const [pets, setPets] = useState([
    {
      name: "Jaki",
      age: "2 Years old",
      breed: "Jack Russell",
      image: "/images/cat1.jpg",
      type: "cat",
    },
    {
      name: "Maki",
      age: "2 Years old",
      breed: "Jack Russell",
      image: "/images/dog2.jpg",
      type: "dog",
    },
    {
      name: "Yoi",
      age: "2 Years old",
      breed: "Jack Russell",
      image: "/images/dog1.jpg",
      type: "dog",
    },
    {
      name: "Ichi",
      age: "2 Years old",
      breed: "Jack Russell",
      image: "/images/cat2.jpg",
      type: "cat",
    },
    {
      name: "Toji",
      age: "2 Years old",
      breed: "Jack Russell",
      image: "/images/cat2.jpg",
      type: "cat",
    },
    {
      name: "Momo",
      age: "3 Years old",
      breed: "Poodle",
      image: "/images/dog2.jpg",
      type: "dog",
    },
    {
      name: "Momo",
      age: "3 Years old",
      breed: "Poodle",
      image: "/images/dog2.jpg",
      type: "dog",
    },
    {
      name: "Sora",
      age: "1 Year old",
      breed: "Persian",
      image: "/images/cat1.jpg",
      type: "cat",
    },
    {
      name: "Kuro",
      age: "4 Years old",
      breed: "Labrador",
      image: "/images/dog1.jpg",
      type: "dog",
    },
    {
      name: "Nana",
      age: "2 Years old",
      breed: "British Shorthair",
      image: "/images/cat2.jpg",
      type: "cat",
    },
    {
      name: "Choco",
      age: "3 Years old",
      breed: "Beagle",
      image: "/images/dog2.jpg",
      type: "dog",
    },
  ]);

  const mockUser = {
    firstName: "John",
    lastName: "Sonner",
    email: "user@gmail.com",
    phoneNum: "099-536-8563",
  };

  const mockRequest = {
    firstName: mockUser.firstName,
    lastName: mockUser.lastName,
    email: mockUser.email,
    phoneNum: mockUser.phoneNum,
    houseEnviron: "House",
    houseUrl: "https://i.ytimg.com/vi/B56pik49Y5s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxi5QbZd7EennlYLzHEnYOnSfccA",
    financial: "40,001 - 50,000",
    address: `9/168 Prachautit 23 Prachautit Road,\nBangMod, Thung Kru, Bangkok, 10140`,
    pickup: "Delivery",
  };

  const handleDelete = (indexToDelete) => {
    setPets((prevPets) => prevPets.filter((_, index) => index !== indexToDelete));
  };

  const totalPages = Math.ceil(pets.length / petsPerPage);
  const startIndex = (currentPage - 1) * petsPerPage;
  const currentPets = pets.slice(startIndex, startIndex + petsPerPage);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#F0E7E1] to-[#EAD9C9] flex flex-col">
        <Navbar />
        <h1 className="text-2xl font-bold mt-12 mb-8 text-start pl-4 sm:pl-6 md:pl-8">
          Your post
        </h1>

        <EditPetForm
          trigger={editPopup}
          setTrigger={setEditPopup}
          petData={selectedPet}
        />

        <div className="flex flex-wrap justify-center gap-8 px-8">
          {currentPets.map((pet, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 w-[250px] flex-shrink-0 hover:scale-105 transition-all duration-300"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="font-bold text-lg mb-1">{pet.name}</h2>
                <p className="text-sm text-gray-500">{pet.age}</p>
                <p className="text-sm flex items-center gap-2 mt-1">
                  <img
                    src={
                      pet.type === "dog"
                        ? "/images/dogorangeicon.png"
                        : "/images/catorangeicon.png"
                    }
                    className="w-6 h-6"
                    alt={pet.type}
                  />
                  <span className="text-sm text-gray-600">{pet.breed}</span>
                </p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => {
                        setSelectedPet(pet);
                        setSelectedRequest(mockRequest);
                        setRequestPopup(true);
                      }}
                      className="bg-primaryO text-white text-sm px-4 py-1 rounded-md transition-all duration-300
                      hover:bg-white hover:text-primaryO border hover:border-primaryO"
                    >
                      1 Request
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedPet(mockPetData);
                          setEditPopup(true);
                        }}
                        className="text-primaryO hover:text-orange-600"
                      >
                        <img src={PencilIcon} className="w-6 h-6" alt="Edit" />
                      </button>
                      <button
                        onClick={() => {
                          setPetToDeleteIndex(index);
                          setShowDeleteConfirm(true);
                        }}
                        className="text-primaryO hover:text-orange-600"
                      >
                        <img src={TrashIcon} className="w-6 h-6" alt="Delete" />
                      </button>

                    </div>
                  </div>
                </div>
            ))}
          </div>


        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded border text-primaryO border-primaryO hover:bg-primaryO hover:text-white disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded border ${
                currentPage === i + 1
                  ? "bg-primaryO text-white"
                  : "text-primaryO border-primaryO hover:bg-primaryO hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded border text-primaryO border-primaryO hover:bg-primaryO hover:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Popups */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-y-2">
              <h2 className="text-xl font-bold text-primaryO">
                Confirm Delete?
              </h2>
              <p className="text-gray-600">
                Are you sure you want to delete this item?
              </p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="border border-primaryO text-primaryO px-4 py-2 rounded hover:bg-red-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleDelete(petToDeleteIndex);
                    setShowDeleteConfirm(false);
                  }}
                  className="bg-primaryO text-white px-4 py-2 rounded"

                >
                  {i + 1}
                </button>
            ))}

            <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded border text-primaryO border-primaryO hover:bg-primaryO hover:text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        <RequestDetailPopup
          trigger={requestPopup}
          setTrigger={setRequestPopup}
          requestData={selectedRequest}
        />
      </div>
    </>

  );
}