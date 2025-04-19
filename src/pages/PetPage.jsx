import React, { useState } from "react";
import Navbar from "../assets/Navbar";
import CreatePetForm from "../popup/CreatePetForm";
import EditPetForm from "../popup/EditPetForm";

export default function PetPage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  // for edit popup
  const [editPopup, setEditPopup] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
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
      <Navbar />
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto text-center mt-8 g-24 min-h-screen">
        <div>This is Pet Page!</div>
        <br />
        <button onClick={() => setButtonPopup(true)}>Create</button>
        <button
          onClick={() => {
            setSelectedPet(mockPetData);
            setEditPopup(true);
          }}
        >
          Edit
        </button>

        <CreatePetForm trigger={buttonPopup} setTrigger={setButtonPopup} />
        <EditPetForm
          trigger={editPopup}
          setTrigger={setEditPopup}
          petData={selectedPet}
        />
      </div>
    </>
  );
}
