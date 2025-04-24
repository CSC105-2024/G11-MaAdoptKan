import React from "react";

export default function RequestForm({ trigger, setTrigger, petData }) {
    if (!trigger) return null;

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

                <h1 className="text-3xl font-bold mb-8">
                    Request Form {petData?.name && `for: ${petData.name}`}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left side */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="font-semibold">First Name</label>
                            <p className="mt-1">John</p>
                        </div>
                        <div>
                            <label className="font-semibold">Email</label>
                            <p className="mt-1">user@gmail.com</p>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">House Environment</label>
                            <div className="flex items-center gap-2">
                                <select className="w-full px-4 py-2 border rounded-md shadow">
                                    <option>House Options</option>
                                </select>
                                <button className="px-4 py-2 border border-orange-400 text-orange-500 rounded-md hover:bg-orange-100 transition">
                                    Upload
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="font-semibold mb-2">Pickup</label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="pickup" className="accent-orange-400" />
                                    Self-pickup
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="pickup" className="accent-orange-400" defaultChecked />
                                    Delivery
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="font-semibold">Last Name</label>
                            <p className="mt-1">Sonner</p>
                        </div>
                        <div>
                            <label className="font-semibold">Phone Number</label>
                            <p className="mt-1">099-536-8563</p>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">Financial</label>
                            <select className="w-full px-4 py-2 border rounded-md shadow">
                                <option>Range Of Your Salary</option>
                            </select>
                        </div>
                        <div>
                            <label className="font-semibold mb-1">Address</label>
                            <textarea
                                rows={3}
                                defaultValue="9/168 Prachautit 23 Prachautit Road, BangMod, Thung Kru, Bangkok, 10140"
                                className="w-full p-3 border rounded-md shadow"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex justify-end gap-4 mt-10">
                    <button
                        onClick={() => setTrigger(false)}
                        className="px-6 py-2 border border-orange-400 text-orange-500 rounded-md hover:bg-orange-100 transition"
                    >
                        Cancel
                    </button>
                    <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                        Send Request
                    </button>
                </div>
            </div>
        </div>
    );
}