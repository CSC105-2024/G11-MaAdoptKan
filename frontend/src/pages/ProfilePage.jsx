import React, { useState, useEffect } from "react";
import Navbar from "../assets/Navbar.jsx";
import PencilIcon from "../../public/images/Pencil.png";
import TrashIcon from "../../public/images/Delete.png";
import RequestDetailPopup from "../popup/RequestDetail.jsx";
import EditPetForm from "../popup/EditPetForm.jsx";
import { getPetFromUser } from "../api/getPetFromUser";
import { deletePet } from "../api/deletePet.js";
import { getRequestsByPetId } from "../api/requestDetail";

export default function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [requestCounts, setRequestCounts] = useState({}); // เก็บจำนวน request ของแต่ละ pet

  useEffect(() => {
    document.title = "Your Profile";
    const login = localStorage.getItem("isLoggedIn");

    if (login) {
      setIsLoggedIn(true);

      const getPetUser = async () => {
        const data = await getPetFromUser();
        if (data.success) {
          setPets(data.data);

          const counts = {};
          for (const pet of data.data) {
            const requestData = await getRequestsByPetId(pet.id);
            counts[pet.id] = requestData.success ? requestData.data.length : 0;
          }
          setRequestCounts(counts);
        }
      };
      getPetUser();

    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const [requestPopup, setRequestPopup] = useState(false);
  const [selectedRequests, setSelectedRequests] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [editPopup, setEditPopup] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [petToDeleteIndex, setPetToDeleteIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 10;

  const [pets, setPets] = useState([]);

  const totalPages = Math.ceil(pets.length / petsPerPage);
  const startIndex = (currentPage - 1) * petsPerPage;
  const currentPets = pets.slice(startIndex, startIndex + petsPerPage);

  const handleRequestClick = async (pet) => {
    const res = await getRequestsByPetId(pet.id);
    if (res.success && res.data.length > 0) {
      setSelectedRequests(res.data);
    } else {
      setSelectedRequests([]);
    }
    setSelectedPet(pet);
    setRequestPopup(true);
  };

  const handleRequestUpdate = async (petId) => {
    const res = await getRequestsByPetId(petId);
    const newCount = res.success ? res.data.length : 0;

    setRequestCounts((prev) => ({
      ...prev,
      [petId]: newCount
    }));
  };

  const handleDelete = async (petId) => {
    const res = await deletePet(petId);
    if (res.success) {
      setPets((prevPets) => prevPets.filter((pet) => pet.id !== petId));
      // อัพเดท request counts
      setRequestCounts((prev) => {
        const updated = { ...prev };
        delete updated[petId];
        return updated;
      });
    } else {
      alert("Error deleting a pet! Try Again!");
    }
  };

  console.log(pets);

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

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 px-4 md:px-8 w-full max-w-[1440px]">
              {currentPets.map((pet, index) => (
                  <div
                      key={pet.id}
                      className={`bg-white rounded-xl shadow-md p-4 w-full flex-shrink-0 transition-all duration-150 ${
                          requestPopup ? "" : "hover:scale-105"
                      }`}
                  >
                    <img
                        src={`http://localhost:3000/${pet.pictureUrl}`}
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
                        <div className="flex w-full items-center justify-between mt-4">
                          <button
                              onClick={() => handleRequestClick(pet)}
                              className="bg-primaryO text-white text-sm px-4 py-1 rounded-md transition-all
                        duration-300 hover:bg-white hover:text-primaryO border hover:border-primaryO"
                              disabled={!requestCounts[pet.id] || requestCounts[pet.id] === 0}
                          >
                            {requestCounts[pet.id] || 0} Requests
                          </button>
                          <div className="flex gap-2">
                            <button
                                onClick={() => {
                                  setSelectedPet(pet);
                                  setEditPopup(true);
                                  setRequestPopup(false);
                                }}
                                className="text-primaryO hover:text-orange-600"
                            >
                              <img
                                  src={PencilIcon}
                                  className="w-6 h-6"
                                  alt="Edit"
                              />
                            </button>
                            <button
                                onClick={() => handleDelete(pet.id)}
                                className="text-primaryO hover:text-orange-600"
                            >
                              <img
                                  src={TrashIcon}
                                  className="w-6 h-6"
                                  alt="Delete"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
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

          {/* Request Detail Popup */}
          <RequestDetailPopup
              trigger={requestPopup}
              setTrigger={setRequestPopup}
              selectedRequests={selectedRequests}
              setSelectedRequests={setSelectedRequests}
              setPets={setPets}
              selectedPet={selectedPet}
              onRequestUpdate={handleRequestUpdate} // เพิ่ม callback
          />
        </div>
      </>
  );
}