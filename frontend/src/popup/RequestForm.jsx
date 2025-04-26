import React, { useState } from "react";


export default function RequestForm({ trigger, setTrigger, petData }) {
    const [previewUrl, setPreviewUrl] = useState(null);
    if (!trigger) return null;


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url); // เซ็ต preview
        }
    };


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
                                    <option>House</option>
                                    <option>Condominium</option>
                                </select>
                                <label
                                    htmlFor="upload-img"
                                    className="bg-white border border-primaryO text-primaryO px-6 py-2 rounded-[8px] hover:bg-primaryO hover:text-white"
                                >
                                    Upload
                                    <input
                                        id="upload-img"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>

                            {/* preview รูป */}
                            {previewUrl && (
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="w-40 h-40 object-cover rounded-md mt-4"
                                />
                            )}
                        </div>
                        <div>
                            <label className="font-semibold mb-2">Pickup</label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="pickup" className="accent-primaryO" />
                                    Self-pickup
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="pickup" className="accent-primaryO" defaultChecked />
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
                                <option>0-10,000</option>
                                <option>10,001-20,000</option>
                                <option>20,001-30,000</option>
                                <option>30,001-40,000</option>
                                <option>40,001-50,000</option>
                                <option> more than 50,000 </option>
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
                        className="bg-white border border-primaryO text-primaryO px-6 py-2 rounded-[8px] hover:bg-primaryO hover:text-white"
                    >
                        Cancel
                    </button>
                    <button className="bg-primaryO text-white px-6 py-2 rounded hover:text-primaryO hover:bg-white hover:border border-primaryO">
                        Send Request
                    </button>
                </div>
            </div>
        </div>
    );
}