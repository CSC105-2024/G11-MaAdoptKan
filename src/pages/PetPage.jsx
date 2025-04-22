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

    const pets = [
        { name: "Maki", age: "2 Yearsold", breed: "Himalayan", image: "./images/Maki.png", icon: "./images/catorangeicon.png" , type: "cat" },
        { name: "Yuma", age: "2 Yearsold", breed: "Labrador Retriever", image: "./images/Yuma.png", icon: "./images/dogorangeicon.png", type: "dog" },
        { name: "Maki", age: "2 Yearsold", breed: "Himalayan", image: "./images/Maki.png", icon: "./images/catorangeicon.png", type: "cat" },
        { name: "Yuma", age: "2 Yearsold", breed: "Labrador Retriever", image: "./images/Yuma.png", icon: "./images/dogorangeicon.png", type: "dog" },
        { name: "Maki", age: "2 Yearsold", breed: "Himalayan", image: "./images/Maki.png", icon: "./images/catorangeicon.png", type: "cat" },
        { name: "Yuma", age: "2 Yearsold", breed: "Labrador Retriever", image: "./images/Yuma.png", icon: "./images/dogorangeicon.png", type: "dog" },
        { name: "Maki", age: "2 Yearsold", breed: "Himalayan", image: "./images/Maki.png", icon: "./images/catorangeicon.png", type: "cat" },
        { name: "Yuma", age: "2 Yearsold", breed: "Labrador Retriever", image: "./images/Yuma.png", icon: "./images/dogorangeicon.png", type: "dog" },
    ];

    const filteredPets =
        filter === "All" ? pets : pets.filter((pet) => pet.type === filter);

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
                                    filter === type ? 'text-[#E97A28] text-2xl' : 'text-gray-400 text-xl'
                                }`}
                                onClick={() => setFilter(type)}
                            >
                                {type === 'All' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1) + 's'}
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-full">
                    {filteredPets.map((pet, index) => (
                        <div key={index} className="bg-white rounded-xl shadow p-4">
                            <img src={pet.image} alt={pet.name} className="rounded-md w-full h-32 object-cover" />
                            <div className="text-left mt-2">
                                <div className="font-semibold text-lg">{pet.name}</div>
                                <div className="text-sm text-gray-500">{pet.age}</div>
                                <div className="flex text-sm pt-1 text-[#000000] mt-1 gap-2">
                                    <img
                                        src={pet.icon}
                                        className="w-[25px] h-[25px] object-cover rounded-lg flex items-center"
                                    />
                                    <div className="flex items-center">{pet.breed}</div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CreatePetForm trigger={buttonPopup} setTrigger={setButtonPopup} />
            <EditPetForm trigger={editPopup} setTrigger={setEditPopup} />
            <PetInformation trigger={infoPopup} setTrigger={setInfoPopup} />
            <RequestForm trigger={requestPopup} setTrigger={setRequestPopup} />
        </>
    );
}

