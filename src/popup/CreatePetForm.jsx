import React, { useEffect, useState } from "react";
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

  const [step, setStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      setTimeout(() => setTrigger(false), 1500);
    }
  };

  if (!trigger) return null;

  const StepIndicator = () => (
    <div className="flex justify-center gap-2 mb-4">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            step === n ? "bg-primaryO text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          {n}
        </span>
      ))}
    </div>
  );

  const MobileForm = () => (
    <div className="flex flex-col flex-1 w-full min-w-full gap-4 px-4">
      <StepIndicator />
      <div className="w-full min-w-full flex flex-col gap-4 px-4">
        {step === 1 && (
          <>
            <div className="w-full">
              <div className="flex w-full justify-between mb-2">
                <p className="flex items-center font-medium">Picture</p>
                <input
                  type="file"
                  id="upload-photo-1"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => console.log("File 1:", e.target.files[0])}
                />
                <label
                  htmlFor="upload-photo-1"
                  className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white"
                >
                  Upload
                </label>
              </div>
              <div className="w-full h-[280px] bg-gray-100 rounded-lg"></div>
            </div>
            <div>
              <p className="flex text-regular font-medium">Type</p>
              <div className="flex gap-4">
                {["cat", "dog"].map((val) => (
                  <div key={val} className="flex items-center">
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
            <div>
              <p className="flex text-regular font-medium">Name</p>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <p className="flex text-regular font-medium">Gender</p>
              <div className="flex gap-4">
                {["male", "female"].map((val) => (
                  <div key={val} className="flex items-center">
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
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <p className="flex text-regular font-medium">Date of Birth</p>
              <Calendar
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.value)}
                showIcon
                className="p-calendar-custom flex justify-start w-full"
              />
            </div>
            <div>
              <p className="flex text-regular font-medium">Age</p>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={formData.ageYear}
                  onChange={(e) => handleInputChange("ageYear", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                <span className="flex items-center">Years</span>
                <input
                  type="number"
                  value={formData.ageMonth}
                  onChange={(e) =>
                    handleInputChange("ageMonth", e.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                <span className="flex items-center">Months</span>
              </div>
            </div>
            <div>
              <p className="flex text-regular font-medium">Breed</p>
              <input
                type="text"
                value={formData.breed}
                onChange={(e) => handleInputChange("breed", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <p className="flex text-regular font-medium">Phone Number</p>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <p className="flex text-regular font-medium">Address</p>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <div className="flex w-full justify-between mb-2">
                <p className="flex items-center font-medium">Vaccine Reccord</p>
                <input
                  type="file"
                  id="upload-photo-2"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => console.log("File 2:", e.target.files[0])}
                />
                <label
                  htmlFor="upload-photo-2"
                  className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white"
                >
                  Upload
                </label>
              </div>
              {formData.vaccine.map((val, i) => (
                <input
                  key={i}
                  value={val}
                  onChange={(e) => handleVaccineChange(i, e.target.value)}
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 mb-2"
                />
              ))}
            </div>
          </>
        )}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="text-primaryO border border-primaryO px-4 py-2 rounded hover:bg-primaryO hover:text-white"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-primaryO text-white px-4 py-2 rounded hover:text-primaryO hover:bg-white hover:border border-primaryO"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleUpload}
              className="bg-primaryO text-white px-6 py-2 rounded hover:text-primaryO hover:bg-white hover:border border-primaryO"
            >
              Upload
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const DesktopForm = () => (
    <div className="flex-grow overflow-auto">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-x-12 gap-y-8 justify-items-center"
      >
        {/* 1st col */}
        <div className="w-full max-w-[400px] min-w-[300px]">
          {/* Picture */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-regular font-medium">Picture</p>
              <input
                type="file"
                id="upload-photo-1"
                accept="image/*"
                className="hidden"
                onChange={(e) => console.log("File 1:", e.target.files[0])}
              />
              <label
                htmlFor="upload-photo-1"
                className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white"
              >
                Upload
              </label>

              {/* <button className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white">
                Upload
              </button> */}
            </div>
            <img src="" alt="" className="w-full h-[320px] rounded-[8px]" />
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
        <div className="w-full max-w-[400px] min-w-[300px]">
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
            <p className="text-regular flex mb-2 font-medium">Date of birth</p>
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
                onChange={(e) => handleInputChange("ageYear", e.target.value)}
                className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
              />
              <label>Years</label>
              <input
                type="number"
                value={formData.ageMonth}
                onChange={(e) => handleInputChange("ageMonth", e.target.value)}
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
        <div className="w-full max-w-[400px] min-w-[300px]">
          {/* Phone Number */}
          <div className="mb-4">
            <p className="text-regular flex mb-2 font-medium">Phone Number</p>
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
              <input
                type="file"
                id="upload-photo-2"
                accept="image/*"
                className="hidden"
                onChange={(e) => console.log("File 2:", e.target.files[0])}
              />
              <label
                htmlFor="upload-photo-2"
                className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white"
              >
                Upload
              </label>
              {/* <button className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white">
                Upload
              </button> */}
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
      <div className="flex justify-end gap-4 mt-8">
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
    </div>
  );

  return (
    <div className="fixed min-w-full">
      <div
        className="popup-inner relative p-[32px] max-w-screen-2xl w-[95%] max-h-screen  h-[80%]
  bg-white rounded-[8px] shadow-lg overflow-auto flex flex-col mx-auto"
      >
        <div className="flex justify-between mb-6">
          <h1 className="flex items-center text-header">Create post</h1>
          <button
            type="button"
            onClick={() => setTrigger(false)}
            class="bg-white rounded-md flex 
        items-center text-gray-400 md:hidden"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {isMobile ? <MobileForm /> : <DesktopForm />}
        {error && <div className="text-red-500 mt-4">⚠️ {error}</div>}
        {success && (
          <div className="text-green-600 mt-4">✅ Create succeed</div>
        )}
      </div>
    </div>
  );
}
