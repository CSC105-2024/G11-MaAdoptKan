import React from "react";
import Navbar from "./../assets/Navbar";
import { Search, PawPrint } from "lucide-react"; // for icons (optional)
import { Link } from "react-router-dom";

export default function HomePage() {
    const pets = [
        { name: "Maki", age: "2 Yearsold", breed: "Himalayan", image: "./images/Maki.png", icon: "🐱" },
        { name: "Yuma", age: "2 Yearsold", breed: "Labrador Retriever", image: "./images/Yuma.png", icon: "🐶" },
        { name: "Jaki", age: "2 Yearsold", breed: "Jack Russell", image: "./images/Jaki.png", icon: "🐶" },
        { name: "Tojin", age: "2 Yearsold", breed: "Scottish Fold", image: "./images/Tojin.png", icon: "🐱" },
        { name: "Maki", age: "2 Yearsold", breed: "Himalayan", image: "./images/Maki.png", icon: "🐱" },
        { name: "Yuma", age: "2 Yearsold", breed: "Labrador Retriever", image: "./images/Yuma.png", icon: "🐶" },
        { name: "Jaki", age: "2 Yearsold", breed: "Jack Russell", image: "./images/Jaki.png", icon: "🐶" },
        { name: "Tojin", age: "2 Yearsold", breed: "Scottish Fold", image: "./images/Tojin.png", icon: "🐱" },
    ];

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full h-[500px] overflow-hidden text-center">
                <div className="absolute inset-0 z-0 bg-[rgba(0,0,0,20)]">
                    <div className="w-full h-full bg-[url('./images/Heropetpicture.png')] bg-cover bg-center opacity-70" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                    <h1 className="text-4xl font-bold">We provide <span className="text-orange-400 font-sue">500,000,000</span> shelters to abandoned animals</h1>
                    <p className="text-xl mt-4">Search for your favorite pets</p>
                    <div className="hidden sm:block w-full max-w-md shadow-md">
                        <div className=" flex items-center mt-4 bg-white rounded-[6px] px-4 py-2 ">
                            <input
                                type="text"
                                placeholder="Search for your favorite pets"
                                className="flex-grow outline-none text-black px-2"
                            />
                            <Search className="text-orange-500" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Recommended Pets Section */}
            <div className="max-w-[1440px] mx-auto px-4 py-10">
                <div className="block sm:hidden w-full max-w-md shadow-md mb-5">
                <div className="flex items-center mt-4 bg-white rounded-[6px] px-4 py-2 ">
                    <input
                        type="text"
                        placeholder="Search for your favorite pets"
                        className="flex-grow outline-none text-black px-2"
                    />
                    <Search className="text-orange-500" />
                </div>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-4 mb-6">
                    <h2 className="text-lg sm:text-2xl font-bold whitespace-nowrap">
                        Recommended Pets For You
                    </h2>
                    <Link
                        to="/pets"
                        className="px-4 py-2 text-sm sm:text-base text-orange-500 font-medium border-1 border-orange-500 bg-orange-50 rounded-lg transition hover:bg-orange-100 whitespace-nowrap"
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
                            className="min-w-[250px] flex-shrink-0 bg-white rounded-xl shadow p-4 text-left"
                        >
                            <img
                                src={pet.image}
                                alt={pet.name}
                                className="w-full h-[200px] object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold">{pet.name}</h3>
                            <p className="text-sm text-gray-500">{pet.age}</p>
                            <div className="flex items-center gap-2 mt-1 text-sm text-gray-700">
                                <span>{pet.icon}</span>
                                <span>{pet.breed}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>

        </>
    );
}
