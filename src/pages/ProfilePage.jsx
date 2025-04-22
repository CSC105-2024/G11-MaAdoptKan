import React, { useState } from "react";
import RequestForm from "../popup/RequestForm"; // Modal popup component

export default function ProfilePage() {
    const [requestPopup, setRequestPopup] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);

    const pets = [
        {
            name: "Jaki",
            age: "2 Yearsold",
            breed: "Jack Russell",
            image: "/images/cat1.jpg",
        },
        // Add more pet objects if needed
        {
            name: "Jaki",
            age: "2 Yearsold",
            breed: "Jack Russell",
            image: "/images/dog2.jpg",
        },
        {
            name: "Jaki",
            age: "2 Yearsold",
            breed: "Jack Russell",
            image: "/images/dog1.jpg",
        },
        {
            name: "Jaki",
            age: "2 Yearsold",
            breed: "Jack Russell",
            image: "/images/cat2.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#F0E7E1] to-[#EAD9C9] px-6 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Your post</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                {pets.map((pet, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-4 w-full max-w-xs mx-auto">
                        <img
                            src={pet.image}
                            alt={pet.name}
                            className="rounded-md w-full h-40 object-cover"
                        />
                        <h2 className="font-bold text-lg mt-3">{pet.name}</h2>
                        <p className="text-sm text-gray-500">{pet.age}</p>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                            <span role="img" aria-label="paw">🐾</span>
                            {pet.breed}
                        </p>

                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={() => {
                                    setSelectedPet(pet);
                                    setRequestPopup(true);
                                }}
                                className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1 rounded-md"
                            >
                                1 Request
                            </button>

                            <div className="flex gap-2">
                                <button className="text-orange-500 hover:text-orange-600 text-xl">✏️</button>
                                <button className="text-orange-500 hover:text-orange-600 text-xl">🗑️</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal popup */}
            <RequestForm
                trigger={requestPopup}
                setTrigger={setRequestPopup}
                petData={selectedPet}
            />
        </div>
    );
}