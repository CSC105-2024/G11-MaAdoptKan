import React from "react";

export default function RequestDetailPopup({ trigger, setTrigger, requestData }) {
    if (!trigger || !requestData) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full p-10 relative">
                {/* Close button */}
                <button
                    onClick={() => setTrigger(false)}
                    className="absolute top-4 right-6 text-2xl font-bold text-gray-500 hover:text-black"
                >
                    &times;
                </button>

                <h1 className="text-3xl font-bold mb-8">Request</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left side */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="font-semibold">First Name</label>
                            <p className="mt-1">{requestData.firstName}</p>
                        </div>
                        <div>
                            <label className="font-semibold">Email</label>
                            <p className="mt-1">{requestData.email}</p>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">House Environment</label>
                            <p className="mt-1">{requestData.houseType}</p>
                            <div className="flex gap-2 mt-2">
                                {requestData.houseImages?.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt="house"
                                        className="w-[120px] h-[100px] object-cover rounded-md"
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">Pickup</label>
                            <p className="mt-1">{requestData.pickup}</p>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="font-semibold">Last Name</label>
                            <p className="mt-1">{requestData.lastName}</p>
                        </div>
                        <div>
                            <label className="font-semibold">Phone Number</label>
                            <p className="mt-1">{requestData.phone}</p>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">Financial</label>
                            <p className="mt-1">{requestData.financial}</p>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">Address</label>
                            <p className="mt-1 whitespace-pre-line">
                                {requestData.address}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex justify-end gap-4 mt-10">
                    <button
                        onClick={() => setTrigger(false)}
                        className="px-6 py-2 border border-primaryO text-primaryO rounded-md hover:bg-orange-100 transition"
                    >
                        Decline
                    </button>
                    <button className="px-6 py-2 bg-primaryO text-white rounded-md hover:bg-orange-600 transition">
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}