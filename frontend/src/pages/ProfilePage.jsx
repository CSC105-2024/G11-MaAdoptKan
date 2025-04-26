import React, { useState, useEffect } from "react";
import RequestForm from "../popup/RequestForm"; // Modal popup component
import Navbar from "../assets/Navbar.jsx";
import PencilIcon from "../../public/images/Pencil.png";
import TrashIcon from "../../public/images/Delete.png";
import RequestDetailPopup from "../popup/RequestDetail.jsx";
import EditPetForm from "../popup/EditPetForm.jsx";

export default function ProfilePage() {
  useEffect(() => {
    document.title = "Your Profile";
  }, []);

  const [requestCount, setRequestCount] = useState(1);
  const [requestPopup, setRequestPopup] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [editPopup, setEditPopup] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [petToDeleteIndex, setPetToDeleteIndex] = useState(null);
  const [users, setUsers] = useState(mockUsers);
  const [requests, setRequests] = useState(mockRequests);

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

  const mockUsers = [
    {
      firstName: "John",
      lastName: "Sonner",
      email: "user@gmail.com",
      phone: "099-536-8563",
    },
    {
      firstName: "Emily",
      lastName: "Smith",
      email: "emily.smith@gmail.com",
      phone: "088-765-4321",
    },
    {
      firstName: "Alex",
      lastName: "Johnson",
      email: "alex.johnson@gmail.com",
      phone: "086-123-4567",
    },
  ];

  const mockRequests = [
    {
      firstName: mockUsers[0].firstName,
      lastName: mockUsers[0].lastName,
      email: mockUsers[0].email,
      phone: mockUsers[0].phone,
      houseEnviron: "House",
      houseUrl: "https://i.ytimg.com/vi/B56pik49Y5s/hq720.jpg",
      financial: "40,001 - 50,000",
      pickup: "Delivery",
      address: "9/168 Prachautit 23, Bangkok",
    },
    {
      firstName: mockUsers[1].firstName,
      lastName: mockUsers[1].lastName,
      email: mockUsers[1].email,
      phone: mockUsers[1].phone,
      houseEnviron: "Condominium",
      houseUrl: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
      financial: "20,001 - 30,000",
      pickup: "Self-pickup",
      address: "99 Sukhumvit Road, Bangkok",
    },
    {
      firstName: mockUsers[2].firstName,
      lastName: mockUsers[2].lastName,
      email: mockUsers[2].email,
      phone: mockUsers[2].phone,
      houseEnviron: "House",
      houseUrl: "https://images.unsplash.com/photo-1560448070-16d9be2b3d79",
      financial: "30,001 - 40,000",
      pickup: "Delivery",
      address: "45 Silom Road, Bangkok",
    },
  ];

  const [pets, setPets] = useState([
    {
      name: "Jaki",
      age: "2 Years old",
      breed: "Jack Russell",
      image: "/images/cat1.jpg",
      icon: "./images/dogorangeicon.png",
    },
    {
      name: "Jaki",
      age: "2 Years old",
      breed: "Jack Russell",
      image: "/images/dog2.jpg",
      icon: "./images/dogorangeicon.png",
    },
    {
      name: "Jaki",
      age: "2 Years old",
      breed: "Jack Russell",
      image: "/images/dog1.jpg",
      icon: "./images/dogorangeicon.png",
    },
    {
      name: "Jaki",
      age: "2 Years old",
      breed: "Jack Russell",
      image: "/images/cat2.jpg",
      icon: "./images/dogorangeicon.png",
    },
  ]);

  const handleDelete = (indexToDelete) => {
    setPets((prevPets) =>
      prevPets.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#F0E7E1] to-[#EAD9C9]">
        <Navbar />
        <h1 className="text-2xl font-bold mb-8 text-start pl-4 sm:pl-6 md:pl-8">
          Your post
        </h1>
        <EditPetForm
          trigger={editPopup}
          setTrigger={setEditPopup}
          petData={selectedPet}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[34px] gap-y-[36px] px-4 justify-center">
          {pets.map((pet, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 w-full max-w-[220px] mx-auto"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="rounded-md w-full h-44 object-cover"
              />
              <h2 className="font-bold text-lg mt-3">{pet.name}</h2>
              <p className="text-sm text-gray-500">{pet.age}</p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <img
                  src={pet.icon}
                  className="h-full object-cover rounded-lg group-hover:hidden"
                  alt="icon"
                />
                {/* white icon */}
                <img
                  src={
                    pet.type === "cat"
                      ? "./images/catwhiteicon.png"
                      : "./images/dogwhiteicon.png"
                  }
                  className="h-full object-cover rounded-lg hidden group-hover:block absolute top-0 left-0"
                  alt="white icon"
                />
                {pet.breed}
              </p>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => {
                    if (requestCount > 0) {
                      setSelectedPet(pet);
                      setSelectedRequest(mockRequest);
                      setRequestPopup(true);
                    }
                  }}
                  disabled={requestCount === 0}
                  className={`text-white text-sm px-4 py-1 rounded-md
    ${
      requestCount === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-primaryO hover:bg-orange-600"
    }`}
                >
                  {requestCount} Request
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedPet(mockPetData);
                      setEditPopup(true);
                    }}
                    className="text-primaryO hover:text-orange-600 text-xl"
                  >
                    <img src={PencilIcon} className="w-6 h-6" alt="Edit" />
                  </button>
                  <button
                    onClick={() => {
                      setPetToDeleteIndex(index);
                      setShowDeleteConfirm(true);
                    }}
                    className="text-primaryO hover:text-orange-600 text-xl"
                  >
                    <img src={TrashIcon} className="w-6 h-6" alt="Delete" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showDeleteConfirm && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-y-2">
              <svg
                className="w-[80px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z"
                    fill="#EF5350"
                  ></path>{" "}
                  <path
                    d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z"
                    fill="#EF5350"
                  ></path>{" "}
                </g>
              </svg>
              <h2 className="text-xl font-bold mb-2 text-red-400">
                Confirm Delete?
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to delete this item?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="border border-red-400 text-red-400 px-4 py-2 rounded hover:bg-red-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleDelete(petToDeleteIndex);
                    setShowDeleteConfirm(false);
                  }}
                  className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal popup */}
        <RequestDetailPopup
          trigger={requestPopup}
          setTrigger={setRequestPopup}
          requestData={selectedRequest}
          requestCount={requestCount}
          setRequestCount={setRequestCount}
        />
      </div>
    </>
  );
}
