import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { z } from "zod";

// Zod Schema
const petFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  type: z.enum(["cat", "dog"], "Type is required"),
  gender: z.enum(["male", "female"], "Gender is required"),
  color: z.string().optional(),
  date: z.date().optional(),
  ageYear: z.string().optional(),
  ageMonth: z.string().optional(),
  breed: z.string().optional(),
  vaccine: z.array(z.string()).optional(),
});

export default function CreatePetForm({ trigger, setTrigger }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    type: "",
    gender: "",
    color: "",
    date: null,
    ageYear: "",
    ageMonth: "",
    breed: "",
    vaccine: ["", "", "", ""],
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleVaccineChange = (index, value) => {
    const updated = [...formData.vaccine];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, vaccine: updated }));
  };

  const handleUpload = () => {
    const result = petFormSchema.safeParse(formData);
    if (!result.success) {
      const firstError =
        result.error.issues[0]?.message || "Please fill required fields";
      setError(firstError);
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
      setTimeout(() => setTrigger(false), 1500); // ปิด popup หลังสำเร็จ
    }
  };

  if (!trigger) return null;

  return (
    <div class="Popup" className="fixed">
      <div
        className="popup-inner rrelative p-[32px] w-[1280px] h-[800px] 
        bg-white rounded-[8px] shadow-lg overflow-auto flex flex-col"
      >
        <div className="flex-grow overflow-auto">
          <h1 className="flex text-header ml-[26px]">Create post</h1>

          <div className="grid-cols-3 gap-[52px] flex justify-center">
            {/* 1st col */}
            <div className="min-w-[320px] my-4">
              {/* Picture */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-regular font-medium">Picture</p>
                  <button className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white">
                    Upload
                  </button>
                </div>
                <img
                  src=""
                  alt=""
                  className="w-[320px] h-[320px] rounded-[8px]"
                />
              </div>

              {/* Type */}
              <div className="mb-4">
                <p className="text-regular flex mb-2 font-medium">Type</p>
                <div className="flex gap-4">
                  {["cat", "dog"].map((val) => (
                    <div key={val} className="flex align-items-center">
                      <RadioButton
                        inputId={val}
                        name="type"
                        value={val}
                        className="custom-radio-orange"
                        onChange={(e) => handleInputChange("type", e.value)}
                        checked={formData.type === val}
                      />
                      <label htmlFor={val} className="ml-2 capitalize">
                        {val}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div className="mb-4">
                <p className="text-regular flex mb-2 font-medium">Color</p>
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) => handleInputChange("color", e.target.value)}
                  className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                />
              </div>
            </div>

            {/* 2nd col */}
            <div className="min-w-[370px] my-4">
              {/* Name */}
              <div className="mb-4">
                <p className="text-regular flex mb-2 font-medium">Name</p>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                />
              </div>

              {/* Gender */}
              <div className="mb-4">
                <p className="text-regular flex mb-2 font-medium">Gender</p>
                <div className="flex gap-4">
                  {["male", "female"].map((val) => (
                    <div key={val} className="flex align-items-center">
                      <RadioButton
                        inputId={val}
                        name="gender"
                        value={val}
                        className="custom-radio-orange"
                        onChange={(e) => handleInputChange("gender", e.value)}
                        checked={formData.gender === val}
                      />
                      <label htmlFor={val} className="ml-2 capitalize">
                        {val}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* DateOfBirth */}
              <div className="mb-4">
                <p className="text-regular flex mb-2 font-medium">
                  Date of birth
                </p>
                <Calendar
                  className="p-calendar-custom flex justify-start h-[24px] w-full"
                  inputId="birth_date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.value)}
                  showIcon
                />
              </div>

              {/* Age */}
              <div className="mb-4">
                <p className="text-regular flex mb-2 font-medium">Age</p>
                <div className="flex gap-[10px] max-w-[370px]">
                  <input
                    type="number"
                    value={formData.ageYear}
                    onChange={(e) =>
                      handleInputChange("ageYear", e.target.value)
                    }
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                  <label>Years</label>
                  <input
                    type="number"
                    value={formData.ageMonth}
                    onChange={(e) =>
                      handleInputChange("ageMonth", e.target.value)
                    }
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                  <label>Months</label>
                </div>
              </div>

              {/* Breed */}
              <div className="mb-4">
                <p className="text-regular flex mb-2 font-medium">Breed</p>
                <input
                  type="text"
                  value={formData.breed}
                  onChange={(e) => handleInputChange("breed", e.target.value)}
                  className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                />
              </div>
            </div>

            {/* 3rd col */}
            <div className="min-w-[370px] my-4">
              {/* Phone Number */}
              <div className="mb-4">
                <p className="text-regular flex mb-2 font-medium">
                  Phone Number
                </p>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <p className="text-regular flex mb-2 font-medium">Address</p>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                />
              </div>

              {/* Vaccine Record */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-regular font-medium">Vaccine Record</p>
                  <button className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white">
                    Upload
                  </button>
                </div>
                {formData.vaccine.map((val, i) => (
                  <input
                    key={i}
                    value={val}
                    onChange={(e) => handleVaccineChange(i, e.target.value)}
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-auto pt-4 mr-[26px]">
            <button
              onClick={() => setTrigger(false)}
              className="bg-white border border-primaryO text-primaryO px-6 py-2 rounded-[8px] hover:bg-primaryO hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              className="bg-primaryO text-white px-6 py-2 rounded-[8px] hover:text-primaryO hover:bg-white hover:border-1 hover:border-primaryO"
            >
              Upload
            </button>
          </div>
          {/* Success / Error Message */}
          {error && (
            <div className="text-red-500 border border-red-300 rounded p-2 mt-2">
              ⚠️ {error}
            </div>
          )}
          {success && (
            <div className="text-green-600 border border-green-400 p-2 rounded-lg mt-2">
              ✅ Create succeed
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
