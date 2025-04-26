import React, { useState } from "react";
import RequestForm from "../popup/RequestForm"; // Modal popup component
import Navbar from "../assets/Navbar.jsx";
import PencilIcon from "../../public/images/Pencil.png";
import TrashIcon from "../../public/images/Delete.png";
import RequestDetailPopup from "../popup/RequestDetail.jsx";

export default function ProfilePage() {
    const [requestPopup, setRequestPopup] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const pets = [
        {
            name: "Jaki",
            age: "2 Years old",
            breed: "Jack Russell",
            image: "/images/cat1.jpg",
        },
        // Add more pet objects if needed
        {
            name: "Jaki",
            age: "2 Years old",
            breed: "Jack Russell",
            image: "/images/dog2.jpg",
        },
        {
            name: "Jaki",
            age: "2 Years old",
            breed: "Jack Russell",
            image: "/images/dog1.jpg",
        },
        {
            name: "Jaki",
            age: "2 Years old",
            breed: "Jack Russell",
            image: "/images/cat2.jpg",
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-[#F0E7E1] to-[#EAD9C9]">
                <Navbar />
                <h1 className="text-2xl font-bold mb-8 text-start pl-4 sm:pl-6 md:pl-8">Your post</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[34px] gap-y-[36px] px-4 justify-center">
                    {pets.map((pet, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-4 w-full max-w-[220px] mx-auto">
                            <img
                                src={pet.image}
                                alt={pet.name}
                                className="rounded-md w-full h-44 object-cover"
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
                                        setSelectedPet(pet); // เก็บ pet ไว้เผื่อใช้ต่อ
                                        setSelectedRequest({
                                            firstName: "John",
                                            lastName: "Sonner",
                                            email: "user@gmail.com",
                                            phone: "099-536-8563",
                                            houseType: "House",
                                            houseImages: [
                                                "/images/house1.jpg",
                                                "/images/house2.jpg"
                                            ],
                                            financial: "40,001 - 50,000",
                                            address: `9/168 Prachautit 23 Prachautit Road,\nBangMod, Thung Kru, Bangkok, 10140`,
                                            pickup: "Delivery",
                                        });
                                        setRequestPopup(true); // เปิด popup
                                    }}
                                    className="bg-primaryO hover:bg-orange-600 text-white text-sm px-4 py-1 rounded-md"
                                >
                                    1 Request
                                </button>

                                <div className="flex gap-2">
                                    <button className="text-primaryO hover:text-orange-600 text-xl">
                                        <img src={PencilIcon} className="w-6 h-6" alt="Edit" />
                                    </button>
                                    <button className="text-primaryO hover:text-orange-600 text-xl">
                                        <img src={TrashIcon} className="w-6 h-6" alt="Delete" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal popup */}
                <RequestDetailPopup
                    trigger={requestPopup}
                    setTrigger={setRequestPopup}
                    requestData={selectedRequest}
                />
            </div>
        </>
    );
}